import { gql } from '@apollo/client/core';

export const GET_USER = gql`
  query {
    user {
      id
      userName
      nickName
    }
    docs {
      id
      name
      text
    }
  }
`;

export const LOGIN = gql`
  mutation ($loginInput: LoginInput!) {
    login(input: $loginInput) {
      accessToken
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    result: logout
  }
`;
