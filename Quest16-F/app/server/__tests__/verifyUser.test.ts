import { Request } from 'express';
import User from '../src/models/User';
import { createToken, verifyUser } from '../src/utils/verifyUser';
import 'reflect-metadata';

type PickedUser = Pick<User, 'id' | 'userName'>;

describe('verifyUser', () => {
  let user: PickedUser;
  let token: string;

  beforeEach(() => {
    user = {
      id: 0,
      userName: 'test',
    };
    token = createToken(user as User);
  });

  test('헤더에 토큰이 존재할시 user 복호화', () => {
    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    } as Request;

    const result = verifyUser(req);
    const { user: AuthUser } = result;
    expect(AuthUser).toEqual(user);
  });

  test('헤더에 토큰이 존재하지 않을시 user는 null', () => {
    const req = {
      headers: {
        authorization: '',
      },
    } as Request;

    const result = verifyUser(req);
    const { user: AuthUser } = result;
    expect(AuthUser).toBeNull();
  });
});
