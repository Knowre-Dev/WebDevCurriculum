import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    docs: [Doc]
  }

  extend type Mutation {
    createDoc(name: String): Doc
    updateDoc(doc: DocInput): Doc
    deleteDoc(id: ID!): [Doc]
  }

  input DocInput {
    id: ID!
    name: String!
    text: String!
  }

  type Doc {
    id: ID!
    name: String!
    text: String!
    createdAt: String
    updatedAt: String
    user: User
  }
`;
