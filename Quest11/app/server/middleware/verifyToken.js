import jwt from 'jsonwebtoken';
import { CONFIG } from '../config/config.js';

export const verifyToken = (req, res, next) => {
  try {
    const authorization = Reflect.get(req.headers, 'authorization');
    const token = authorization.split(' ')[1];
    const verified = jwt.verify(token, CONFIG.secretKey);
    if (verified) {
      req.user = verified.user;
      next();
    } else {
      res.status(401).json({ error: 'unauthorized' });
    }
  } catch (e) {
    res.status(401).json({ error: 'expired' });
  }
};
