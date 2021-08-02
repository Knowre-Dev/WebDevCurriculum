import { compare } from 'bcrypt';
import User from '../models/User';
import { CreateUserInput } from '../types/user';
import { NotFoundError } from '../utils/erorr';
import { getHashByPassword } from '../utils/hash';

export default class UserService {
  static async getUserByUserName(userName: string): Promise<User> {
    const user = await User.findOne({
      where: { userName: userName },
      raw: true,
    });
    if (!user) {
      throw new NotFoundError('user not found');
    }
    return user;
  }

  static async getUserById(id: number): Promise<User> {
    const user = await User.findOne({
      where: { id: id },
      raw: true,
      attributes: {
        exclude: ['password'],
      },
    });
    if (!user) {
      throw new NotFoundError('user not found');
    }
    return user;
  }

  static async createUser(userInput: CreateUserInput): Promise<User> {
    return await User.create({
      ...userInput,
      password: await getHashByPassword(userInput.password),
    });
  }
}
