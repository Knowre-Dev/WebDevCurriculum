import { CONFIG } from '../config/config.js';
import UserService from '../service/user.service.js';
import jwt from 'jsonwebtoken';

export class AuthController {
  static async signup(req, res, next) {
    try {
      const user = req.body;
      if (await UserService.hasUser(user.userName)) {
        return next('이미 존재하는 username 입니다.');
      }
      const newUser = await UserService.createUser(user);
      res.status(201).json(newUser);
    } catch (e) {
      next(e);
    }
  }
  static async login(req, res, next) {
    try {
      const { userName, password } = req.body;
      if (await UserService.verifyPassword(userName, password)) {
        const user = await UserService.getUserByUserName(userName);
        const token = jwt.sign(
          {
            user: {
              id: user.id,
              userName: user.userName,
            },
          },
          CONFIG.secretKey,
          {
            expiresIn: '1h',
          }
        );
        return res.status(200).json({
          accessToken: token,
        });
      }
      return res.status(401).json({ error: 'invalid user' });
    } catch (e) {
      next(e);
    }
  }

  static async whoami(req, res, next) {
    try {
      const user = await UserService.getUserByUserName(req.user.userName);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  static async logout(req, res, next) {
    try {
      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}
