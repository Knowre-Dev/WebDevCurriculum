import express from 'express';
import { checkSchema } from 'express-validator';
import { AuthController } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { loginSchema, signupSchema, validateResult } from '../utils/validate.js';

const authRouter = express.Router();

authRouter.post('/login', checkSchema(loginSchema), validateResult, AuthController.login);
authRouter.post('/signup', checkSchema(signupSchema), validateResult, AuthController.signup);
authRouter.get('/whoami', verifyToken, AuthController.whoami);
authRouter.post('/logout', verifyToken, AuthController.logout);

export default authRouter;
