import { startApolloServer } from './graphql/apollo-server.js';
import sequelize from './models';

sequelize.sync();

const { server, app } = startApolloServer();
