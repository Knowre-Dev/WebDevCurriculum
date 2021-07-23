import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/config.js';

export const verifyUser = req => {
  const authorization = Reflect.get(req.headers, 'authorization');
  try {
    if (authorization) {
      const token = authorization.split(' ')[1];
      const verified = jwt.verify(token, CONFIG.secretKey);
      return { user: verified.user };
    }
    return { user: null };
  } catch (e) {
    return { user: null };
  }
};
