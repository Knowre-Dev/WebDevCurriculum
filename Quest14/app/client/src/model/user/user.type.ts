import { LoginInput } from './user.model';

export interface TokenData {
  accessToken: string;
}

export interface LoginVars {
  loginInput: LoginInput;
}

export const isResLogin = (obj: unknown): obj is TokenData => {
  return obj != null && typeof (obj as TokenData).accessToken === 'string';
};
