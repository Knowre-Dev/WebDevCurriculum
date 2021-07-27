import { Request } from 'express';

export interface Context {
  req: Request;
  user: {
    id: string;
    userName: string;
  } | null;
}
