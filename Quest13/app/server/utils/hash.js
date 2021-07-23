import { hash } from 'bcrypt';

export const getHashByPassword = async password => {
  return await hash(password, 12);
};

export const checkPassword = async (target, hash) => {
  return (await getHashByPassword(target)) === hash;
};
