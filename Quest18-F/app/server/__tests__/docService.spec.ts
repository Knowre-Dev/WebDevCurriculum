import { ApolloServer } from 'apollo-server-express';
import { getApolloServer } from '../src/apolloServer';
import { Doc } from '../src/models/Doc';
import User from '../src/models/User';
import DocService from '../src/service/doc.service';

describe('Doc Service', () => {
  let server: ApolloServer;
  let user: User;

  beforeAll(async () => {
    server = await getApolloServer();
    const found = await User.findOne({ where: { userName: 'guest1' } });
    if (found) {
      user = found;
    }
  });

  it('문서 이름 중복 확인', async () => {
    const result = await DocService.hasDoc('file1.txt');
    expect(result).toBeTruthy();
  });

  it('문서 조회', async () => {
    const docs = await DocService.getDocsByUserId(user.id);

    expect(docs.length).toBe(3);
  });

  it('문서 생성', async () => {
    const createdDoc = await DocService.createDoc({
      name: 'doc',
      text: 'docText',
      userId: user.id,
    } as Partial<Doc> & { userId: number });

    const docs = await DocService.getDocsByUserId(user.id);
    expect(docs.length).toBe(4);

    expect(createdDoc.id).toBeTruthy();
    expect(createdDoc.name).toBe('doc');
    expect(createdDoc.text).toBe('docText');
    expect(createdDoc.userId).toBe(user.id);
  });

  it('문서 수정', async () => {
    const docs = await DocService.getDocsByUserId(user.id);
    const doc = docs[0];

    const updated = await DocService.updateDoc({
      id: doc.id,
      name: 'updated',
      text: 'updated',
    });

    expect(updated.name).toBe('updated');
    expect(updated.text).toBe('updated');
    expect(updated.id).toBe(doc.id);
  });

  it('문서 삭제', async () => {
    const docs = await DocService.getDocsByUserId(user.id);
    const oNum = docs.length;

    await DocService.deleteDocById(docs[0].id);
    const dDocs = await DocService.getDocsByUserId(user.id);

    expect(oNum - dDocs.length).toBe(1);
  });
});
