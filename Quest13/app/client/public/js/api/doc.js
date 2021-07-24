import { request } from './index.js';

export class DocApi {
  static async getDocs() {
    const res = await request(`
      query {
        docs {
          id
          name
          text
        }
      }
    `);
    return await res?.data?.docs;
  }

  static async create(name) {
    const res = await request(
      `
      mutation($createDocName: String) {
        doc: createDoc(name: $createDocName) {
          id
          name
          text
        }
      }
    `,
      {
        createDocName: name,
      }
    );
    return res?.data?.doc;
  }

  static async delete(id) {
    const res = await request(
      `
        mutation($deleteDocId: ID!) {
          doc: deleteDoc(id: $deleteDocId) {
            id
            name
            text
          }
        }
    `,
      {
        deleteDocId: id,
      }
    );
    return res?.data?.doc;
  }

  static async update(doc) {
    const res = await request(
      `
        mutation($updateDocDoc: DocInput) {
          doc: updateDoc(doc: $updateDocDoc) {
            id
            name
            text
          }
        }
    `,
      {
        updateDocDoc: doc,
      }
    );
    return res?.data?.doc;
  }
}
