import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { CONFIG } from '../config/config.js';
import { errorFormatter } from '../middleware/errorFormatter.js';
import { verifyUser } from '../middleware/verifyUser.js';
import resolver from './resolver.js';
import typeDefs from './typeDefs.js';

const key = fs.readFileSync(path.join(__dirname, '../../keys/localhost.key'));
const cert = fs.readFileSync(path.join(__dirname, '../../keys/localhost.crt'));

export async function startApolloServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolver,
    context: async ({ req }) => {
      return verifyUser(req);
    },
    formatError: errorFormatter,
    debug: false,
  });

  const corsOptions = {
    origin: 'https://127.0.0.1:3000',
    credentials: true,
  };

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: corsOptions,
  });

  const server = https.createServer({ key, cert }, app);

  server.listen(8000);

  console.log(`🚀 Server ready at http://localhost:${CONFIG.port}${apolloServer.graphqlPath}`);
  return { server, app };
}
