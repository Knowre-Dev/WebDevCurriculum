import { AuthenticationError, UserInputError } from 'apollo-server-express';
import DocService from '../../service/doc.service.js';

export default {
  Query: {
    docs: async (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError('Invalid user');
      }
      const { id } = user;
      return await DocService.getDocsByUserId(id);
    },
  },
  Mutation: {
    createDoc: async (_, { name }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Invalid user');
      }
      if (await DocService.hasDoc(name)) {
        throw new UserInputError('Existed');
      }
      return await DocService.createDoc({
        name: name,
        text: '',
        userId: user.id,
      });
    },

    updateDoc: async (_, { doc }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Invalid user');
      }
      return await DocService.updateDoc(doc);
    },

    deleteDoc: async (_, { id }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Invalid user');
      }
      await DocService.deleteDocById(id);
      return await DocService.getDocsByUserId(user.id);
    },
  },
};
