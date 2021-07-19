import { compare } from 'bcrypt';
import User from '../models/user.js';
import { getHashByPassword } from '../utils/hash.js';

export default class UserService {
  static async hasUser(userName) {
    const exUser = await User.findByUserName(userName);
    return !!exUser;
  }

  static async getUserByUserName(userName) {
    return await User.findByUserNameExcludePassword(userName);
  }

  static async verifyPassword(userName, password) {
    const user = await User.findByUserName(userName);
    return await compare(password, user.password);
  }

  static async createUser(user) {
    await User.createUser(user);
    const createdUser = this.getUserByUserName(user.userName);
    delete createdUser.password;
    return createdUser;
  }
}
