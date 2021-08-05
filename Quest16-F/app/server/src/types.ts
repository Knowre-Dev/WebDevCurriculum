import { Request } from 'express';
import { UserByToken } from './utils/verifyUser';

export interface Context {
  req: Request;
  user: UserByToken | null;
}
