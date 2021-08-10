import Express from 'express';
import fs from 'fs';
import https from 'https';
import Path from 'path';
import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import { getApolloServer } from './apolloServer';
import { CONFIG, CORS_OPTIONS, SEQUELIZE_CONFIG } from './config/config';

const key = fs.readFileSync(Path.join(__dirname, '../../keys/localhost.key'));
const cert = fs.readFileSync(Path.join(__dirname, '../../keys/localhost.crt'));

async function main() {
  const sequelize = new Sequelize({
    ...SEQUELIZE_CONFIG,
    models: [__dirname + '/models'],
  });

  await sequelize.sync();

  const app = Express();
  const apolloServer = await getApolloServer();

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
