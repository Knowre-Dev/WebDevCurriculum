// import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { errorHandler, notFound } from './src/middleware/errorHandler.js';

import docsRouter from './src/routes/docs.js';

const index = express();
const __dirname = path.resolve();
index.use(cors());

index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false }));

index.use(cookieParser());
index.use(express.static(path.join(__dirname, 'public')));

index.use('/v1/docs', docsRouter);

index.use(notFound);
index.use(errorHandler);

const port = process.env.PORT || '8000';
index.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default index;
