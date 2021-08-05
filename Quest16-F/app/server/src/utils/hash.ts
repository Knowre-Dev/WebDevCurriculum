import { hash } from 'bcrypt';

export const getHashByPassword = async (password: string): Promise<string> => {
  return await hash(password, 12);
};
