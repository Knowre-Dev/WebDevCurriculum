import { ApolloServer, Config } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { verifyUser } from './utils/verifyUser';

export const getSchema = async () => {
  return await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
    emitSchemaFile: true,
  });
};

export const getApolloServer = async (
  options: Config = {}
): Promise<ApolloServer> => {
  const schema = await getSchema();
  return new ApolloServer({
    schema,
    ...options,
    context: async ({ req }) => {
      return verifyUser(req);
    },
  });
};
