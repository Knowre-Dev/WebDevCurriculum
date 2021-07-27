export class UserModel {
  id: string;
  userName: string;
  nickName: string;
}

export interface LoginInput {
  userName: string;
  password: string;
}
