import { AuthenticationError } from 'apollo-server-express';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BOOLEAN } from 'sequelize';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { CONFIG } from '../config/config';
import { User } from '../models/User';
import { Context } from '../types';
import { AccessToken, CreateUserInput, LoginInput } from '../types/user';
import { NotFoundError } from '../utils/erorr';
import { getHashByPassword } from '../utils/hash';

@Resolver(of => User)
export class AuthResolver {
  @Query(() => User)
  async user(@Ctx() { user }: Context): Promise<User> {
    if (!user) {
      throw new AuthenticationError('Invalid user');
    }
    const found = await User.findOne({ where: { id: user.id } });

    if (found) {
      return found;
    } else {
      throw new NotFoundError('User not found');
    }
  }

  @Mutation(() => User)
  async createUser(@Arg('input') userInput: CreateUserInput): Promise<User> {
    return await User.create({
      ...userInput,
      password: await getHashByPassword(userInput.password),
    });
  }

  @Mutation(() => AccessToken)
  async login(
    @Arg('input') { userName, password }: LoginInput
  ): Promise<AccessToken> {
    const user = await User.findOne({
      where: { userName: userName },
      raw: true,
    });
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const correctPassword = await compare(password, user.password);
    if (correctPassword) {
      const token = jwt.sign(
        {
          user: {
            id: user.id,
            userName: user.userName,
          },
        },
        CONFIG.secretKey,
        {
          expiresIn: '1h',
        }
      );
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
