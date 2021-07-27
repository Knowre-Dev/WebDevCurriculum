import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import fs from 'fs';
import https from 'https';
import Path from 'path';
import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import { buildSchema } from 'type-graphql';
import { CONFIG, CORS_OPTIONS, SEQUELIZE_CONFIG } from './config/config';
import { verifyUser } from './utils/verifyUser';

const key = fs.readFileSync(Path.join(__dirname, '../../keys/localhost.key'));
const cert = fs.readFileSync(Path.join(__dirname, '../../keys/localhost.crt'));

async function main() {
  const sequelize = new Sequelize({
    ...SEQUELIZE_CONFIG,
    models: [__dirname + '/models'],
  });

  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
    emitSchemaFile: true,
  });

  await sequelize.sync();

  const app = Express();
  const apolloServer = new ApolloServer({
    schema,
    context: async ({ req }) => {
      return verifyUser(req);
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: CORS_OPTIONS });

  const server = https.createServer({ key, cert }, app);
  server.listen(CONFIG.port, () => {
    console.log(
      `🚀 Server ready at https://localhost:${CONFIG.port}${apolloServer.graphqlPath}`
    );
  });
}

main();
