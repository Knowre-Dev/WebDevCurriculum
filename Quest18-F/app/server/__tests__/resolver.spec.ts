import { ApolloServer, gql } from 'apollo-server-express';
import { getApolloServer } from '../src/apolloServer';

jest.mock('../src/utils/verifyUser', () => {
  const actual = jest.requireActual('../src/utils/verifyUser');
  return {
    ...actual,
    verifyUser: jest.fn().mockImplementation(async () => {
      return {
        user: {
          id: 1,
          userName: 'guest',
        },
      };
    }),
  };
});

const LOGIN = gql`
  mutation ($loginInput: LoginInput!) {
    login(input: $loginInput) {
      accessToken
    }
  }
`;

const GET_DOCS = gql`
  query {
    docs {
      id
      name
      text
    }
  }
`;

const CREATE_DOC = gql`
  mutation ($createDocName: String!) {
    doc: createDoc(name: $createDocName) {
      id
      text
      name
    }
  }
`;

const UPDATE_DOC = gql`
  mutation ($updateDocDoc: UpdateDocInput!) {
    doc: updateDoc(doc: $updateDocDoc) {
      id
      name
      text
    }
  }
`;

const DELETE_DOC = gql`
  mutation ($deleteDocId: String!) {
    docs: deleteDoc(id: $deleteDocId) {
      id
      name
      text
    }
  }
`;

describe('Resolver', () => {
  let server: ApolloServer;
  beforeAll(async () => {
    server = await getApolloServer();
  });

  afterAll(() => {
    server.stop();
  });

  test('Login', async () => {
    const result = await server.executeOperation({
      query: LOGIN,
      variables: { loginInput: { userName: 'guest1', password: 'guest1' } },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('login');
  });

  test('유저의 문서들을 가져온다.', async () => {
    const result = await server.executeOperation({
      query: GET_DOCS,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('docs');
    expect(result.data?.docs.length).toBe(3);
  });

  test('문서 생성', async () => {
    const result = await server.executeOperation({
      query: CREATE_DOC,
      variables: {
        createDocName: 'testDoc',
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('doc');
  });

  test('문서 수정', async () => {
    const resDocs = await server.executeOperation({
      query: GET_DOCS,
    });
    const docs = resDocs.data?.docs || [];
    if (!docs.length) {
      return;
    }

    const doc = docs[0];

    const result = await server.executeOperation({
      query: UPDATE_DOC,
      variables: {
        updateDocDoc: {
          id: doc.id,
          name: 'modified',
          text: 'modified',
        },
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('doc');
    expect(result.data?.doc.name).toBe('modified');
  });

  it('문서 삭제', async () => {
    const resDocs = await server.executeOperation({
      query: GET_DOCS,
    });
    const docs = resDocs.data?.docs || [];
    const beforeLength = docs.length;
    if (!beforeLength) {
      return;
    }
    const dDoc = docs[0];

    const result = await server.executeOperation({
      query: DELETE_DOC,
      variables: {
        deleteDocId: dDoc.id,
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('docs');
    expect(beforeLength - result.data?.docs.length || 0).toBe(1);
  });
});
