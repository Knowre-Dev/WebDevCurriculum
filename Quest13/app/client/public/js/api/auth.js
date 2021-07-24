import { request } from './index.js';

export class AuthApi {
  static async login(payload) {
    const res = await request(
      `
      mutation($userName: String, $password: String) {
        login(userName: $userName, password: $password) {
          accessToken
        }
      }
      `,
      payload
    );
    return res;
  }

  static async logout() {
    const res = await request(
      `
        mutation {
            result: logout
        }
      `
    );
    return res;
  }

  static async whoami() {
    const res = await request(`
      query {
          user {
              id
              userName
              nickName
          }
      }
    `);
    return res.data?.user;
  }
}
