import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    user: User
  }

  type Mutation {
    login(userName: String, password: String): AccessToken
    signup(signupInput: SignupInput): User
    logout: Boolean
  }

  type User {
    id: ID!
    userName: String
    nickName: String
    password: String
    createdAt: String
    updatedAt: String
  }

  type AccessToken {
    accessToken: String!
  }

  input SignupInput {
    userName: String!
    nickName: String!
    password: String!
  }
`;
