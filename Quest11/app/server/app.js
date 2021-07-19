import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { errorLogger, errorResponder, failSafeHandler } from './middleware/error.js';
import sequelize from './models';
import authRouter from './routes/auth.js';
import docRouter from './routes/docs.js';
import morganMiddleware from './utils/morgan.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  })
);
sequelize.sync();

app.use('/v1/auth', authRouter);
app.use('/v1/docs', docRouter);

//error handler
app.use(errorLogger);
app.use(errorResponder);
app.use(failSafeHandler);

export default app;
