import { loadFilesSync, mergeTypeDefs } from 'graphql-tools';
import path from 'path';

export const typesArray = loadFilesSync(path.join(__dirname, 'types'), { extensions: ['js'] });

const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;
