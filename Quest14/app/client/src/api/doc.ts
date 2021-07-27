import { gql } from '@apollo/client/core';

export const GET_DOCS = gql`
  query {
    docs {
      id
      name
      text
    }
  }
`;

export const ADD_DOC = gql`
  mutation ($createDocName: String!) {
    doc: createDoc(name: $createDocName) {
      id
      text
      name
    }
  }
`;

export const UPDATE_DOC = gql`
  mutation ($updateDocDoc: UpdateDocInput!) {
    doc: updateDoc(doc: $updateDocDoc) {
      id
      name
      text
    }
  }
`;

export const DELETE_DOC = gql`
  mutation ($deleteDocId: String!) {
    docs: deleteDoc(id: $deleteDocId) {
      id
      name
      text
    }
  }
`;
