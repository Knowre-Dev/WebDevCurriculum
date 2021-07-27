import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/config';
import { User } from '../models/User';
import { Context } from '../types';

type UserByToken = Pick<User, 'id' | 'userName'>;

export const verifyUser = (req: Request): Context => {
  const authorization = Reflect.get(req.headers, 'authorization');
  try {
    if (authorization) {
      const token = authorization.split(' ')[1];
      const verified = jwt.verify(token, CONFIG.secretKey) as {
        user: UserByToken | null;
      };
      return { req, user: verified.user };
    }
    return { req, user: null };
  } catch (e) {
    return { req, user: null };
  }
};
