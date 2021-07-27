import { Doc } from '../models/Doc';
import { UpdateDocInput } from '../types/doc';
import { NotFoundError } from '../utils/erorr';

export default class DocService {
  static async getDocsByUserId(userId: string): Promise<Doc[]> {
    return await Doc.findAll({ where: { userId: userId }, include: ['user'] });
  }

  static async hasDoc(name: string): Promise<boolean> {
    const doc = await Doc.findOne({
      where: { name: name },
    });
    return !!doc;
  }

  static async createDoc(doc: Partial<Doc>): Promise<Doc> {
    return await Doc.create(doc, {});
  }

  static async deleteDocById(id: string): Promise<void> {
    await Doc.destroy({ where: { id: id } });
  }

  static async updateDoc(doc: UpdateDocInput): Promise<Doc> {
    const exDoc = await Doc.findOne({ where: { id: doc.id } });
    if (!exDoc) {
      throw new NotFoundError('Doc not found');
    }
    return await exDoc.update(doc);
  }
}
