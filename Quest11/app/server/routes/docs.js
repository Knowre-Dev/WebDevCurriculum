import express from 'express';
import { checkSchema } from 'express-validator';
import DocController from '../controller/doc.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { createDocSchema, updateDocSchema, validateResult } from '../utils/validate.js';

const DocRouter = express.Router();

DocRouter.get('/', verifyToken, DocController.getDocs);
DocRouter.post(
  '/',
  checkSchema(createDocSchema),
  validateResult,
  verifyToken,
  DocController.createDoc
);
DocRouter.put(
  '/',
  checkSchema(updateDocSchema),
  validateResult,
  verifyToken,
  DocController.editDoc
);
DocRouter.delete('/:id', verifyToken, DocController.deleteDoc);

export default DocRouter;
