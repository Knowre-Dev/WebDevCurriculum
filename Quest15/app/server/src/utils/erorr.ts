import { ApolloError } from 'apollo-server-express';

export class NotFoundError extends ApolloError {
  constructor(message: string) {
    super(message, 'NOTFOUND');

    Object.defineProperty(this, 'name', { value: 'MyError' });
  }
}
