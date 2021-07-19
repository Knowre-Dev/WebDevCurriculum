import Doc from '../models/doc.js';

export default class DocService {
  static async getDocsByUserId(userId) {
    const docs = await Doc.findAllByUser(userId);
    return docs;
  }

  static async hasDoc(name) {
    const doc = await Doc.findByName(name);
    return !!doc;
  }

  static async createDoc(doc) {
    return await Doc.create(doc);
  }

  static async deleteDocById(id) {
    return await Doc.deleteDocById(id);
  }

  static async updateDoc(doc) {
    const exDoc = await Doc.findById(doc.id);
    return await exDoc.update(doc);
  }
}
