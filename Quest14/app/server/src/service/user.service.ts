import { compare } from 'bcrypt';
import { User } from '../models/User';
import { CreateUserInput } from '../types/user';
import { NotFoundError } from '../utils/erorr';
import { getHashByPassword } from '../utils/hash';

export default class UserService {
  static async hasUser(userName: string): Promise<boolean> {
    const exUser = await User.findOne({
      where: { userName: userName },
      raw: true,
    });
    return !!exUser;
  }

  static async getUserByUserName(userName: string): Promise<User> {
    const user = await User.findOne({
      where: { userName: userName },
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

  static async verifyPassword(
    userName: string,
    password: string
  ): Promise<boolean> {
    const user = await this.getUserByUserName(userName);
    return await compare(password, user.password);
  }

  static async createUser(userInput: CreateUserInput): Promise<User> {
    return await User.create({
      ...userInput,
      password: await getHashByPassword(userInput.password),
    });
  }
}
