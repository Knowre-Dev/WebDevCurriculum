import { check, validationResult } from 'express-validator';

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const USER = {
  userName: {
    notEmpty: true,
    errorMessage: 'Username cannot be empty',
  },
  nickName: {
    notEmpty: true,
    errorMessage: 'Nickname cannot be empty',
  },
  password: {
    isLength: {
      options: {
        min: 4,
      },
      errorMessage: 'Password must be greater than 4',
    },
  },
};

const DOC = {
  id: {
    notEmpty: true,
    isUUID: true,
  },
  name: {
    isString: {
      errorMessage: 'name must be string',
    },
    notEmpty: {
      errorMessage: 'name cannot be empty',
    },
  },
  text: {
    isString: true,
  },
};

export const signupSchema = {
  userName: USER.userName,
  nickName: USER.nickName,
  password: USER.password,
};

export const loginSchema = {
  userName: USER.userName,
  password: USER.password,
};

export const createDocSchema = {
  name: DOC.name,
};

export const updateDocSchema = {
  id: DOC.id,
  name: DOC.name,
  text: DOC.text,
};
