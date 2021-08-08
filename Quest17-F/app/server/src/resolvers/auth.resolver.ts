import { AuthenticationError } from 'apollo-server-express';
import { compare } from 'bcrypt';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import User from '../models/User';
import UserService from '../service/user.service';
import { Context } from '../types';
import { AccessToken, CreateUserInput, LoginInput } from '../types/user';
import { NotFoundError } from '../utils/erorr';
import { createToken } from '../utils/verifyUser';

@Resolver(of => User)
export default class AuthResolver {
  @Query(() => User)
  async user(@Ctx() { user }: Context): Promise<User> {
    console.log('%c [JL] user - user', 'font-size: 16px; color:  red;', user);
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }
    const found = await UserService.getUserById(user.id);

    if (found) {
      return found;
    } else {
      throw new NotFoundError('User not found');
    }
  }

  @Mutation(() => User)
  async createUser(@Arg('input') userInput: CreateUserInput): Promise<User> {
    return await UserService.createUser(userInput);
  }

  @Mutation(() => AccessToken)
  async login(
    @Arg('input') { userName, password }: LoginInput
  ): Promise<AccessToken> {
    const user = await UserService.getUserByUserName(userName);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    const correctPassword = await compare(password, user.password);
    if (correctPassword) {
      const token = createToken(user);
      return {
        accessToken: token,
      };
    } else {
      throw new AuthenticationError('Invalid user');
    }
  }

  @Mutation()
  logout(): boolean {
    return true;
  }
}
