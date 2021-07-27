import { SequelizeOptions } from 'sequelize-typescript/dist/sequelize/sequelize/sequelize-options';

export const CONFIG = {
  secretKey: 'SECRET',
  port: 8000,
};

export const SEQUELIZE_CONFIG: SequelizeOptions = {
  username: 'admin',
  password: 'uULF14XdmW6PJOyd22qE',
  database: 'Notepad',
  host: 'juicy-rds.cdpxb84esno1.ap-northeast-2.rds.amazonaws.com',
  dialect: 'mysql',
};

export const CORS_OPTIONS = {
  origin: [
    'https://127.0.0.1:3000',
    'https://studio.apollographql.com',
    'https://localhost:3000',
  ],
  credentials: true,
};
