import { hash } from 'bcrypt';

export const getHashByPassword = async (password: string) => {
  return await hash(password, 12);
};

export const checkPassword = async (target: string, hash: string) => {
  return (await getHashByPassword(target)) === hash;
};
