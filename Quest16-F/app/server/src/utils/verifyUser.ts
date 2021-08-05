import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/config';
import User from '../models/User';
import { Context } from '../types';

export type UserByToken = Pick<User, 'id' | 'userName'>;

export const verifyUser = (req: Request): Context => {
  try {
    const authorization = Reflect.get(req.headers, 'authorization');
    if (authorization) {
      const token = authorization.split(' ')[1];
      const verified = jwt.verify(token, CONFIG.secretKey) as {
        user: UserByToken;
      };
      return { req, user: verified.user };
    }
    return { req, user: null };
  } catch (e) {
    return { req, user: null };
  }
};

export const createToken = (user: User) => {
  return jwt.sign(
    {
      user: {
        id: user.id,
        userName: user.userName,
      },
    },
    CONFIG.secretKey,
    {
      expiresIn: '1h',
    }
  );
};
