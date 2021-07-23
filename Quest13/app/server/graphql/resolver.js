import { loadFilesSync, mergeResolvers } from 'graphql-tools';
import path from 'path';

export const resolversArray = loadFilesSync(path.join(__dirname, 'resolvers'), {
  extensions: ['js'],
});

const resolvers = mergeResolvers(resolversArray);

export default resolvers;
