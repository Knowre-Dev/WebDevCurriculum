import DocService from '../service/doc.service.js';
import { UserService } from '../service/user.service.js';

export default class DocController {
  static async getDocs(req, res, next) {
    try {
      const docs = await DocService.getDocsByUserId(req.user.id);
      res.status(200).json(docs);
    } catch (e) {
      next(e);
    }
  }

  static async createDoc(req, res, next) {
    try {
      const doc = req.body;
      if (await DocService.hasDoc(doc.name)) {
        res.status(409);
        return next(Error('existed'));
      }
      const newDoc = await DocService.createDoc({
        name: doc.name,
        text: '',
        userId: req.user.id,
      });
      res.status(200).json(newDoc);
    } catch (e) {
      console.error(e);
      next(e);
    }
  }

  static async deleteDoc(req, res, next) {
    try {
      const { id } = req.params;
      await DocService.deleteDocById(id);
      const docs = await DocService.getDocsByUserId(req.user.id);
      res.status(200).json(docs);
    } catch (e) {
      next(e);
    }
  }

  static async editDoc(req, res, next) {
    try {
      const doc = req.body;
      console.log('%c [JL] editDoc - doc', 'font-size: 16px; color:  red;', doc);
      const updatedDoc = await DocService.updateDoc(doc);
      console.log('%c [JL] editDoc - updatedDoc', 'font-size: 16px; color:  red;', updatedDoc);
      res.status(200).json(updatedDoc);
    } catch (e) {
      next(e);
    }
  }
}
