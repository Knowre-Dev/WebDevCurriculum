import { AuthenticationError, UserInputError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../../config/config.js';
import UserService from '../../service/user.service.js';

export default {
  Query: {
    user: async (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError('Invalid user');
      }
      return await UserService.getUserByUserName(user.userName);
    },
  },
  Mutation: {
    signup: async (_, { signupInput }) => {
      const user = signupInput;
      if (await UserService.hasUser(user.userName)) {
        throw new UserInputError('Existed user name');
      }
      return await UserService.createUser(user);
    },
    login: async (_, { userName, password }, ___) => {
      if (await UserService.verifyPassword(userName, password)) {
        const user = await UserService.getUserByUserName(userName);

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
      }
      throw new AuthenticationError('Invalid user');
    },
    logout: async () => {
      return true;
    },
  },
};
