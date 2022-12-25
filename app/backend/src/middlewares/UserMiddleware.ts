import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new HttpException(400, 'All fields must be filled');
  }

  next();
};

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    throw new HttpException(400, 'All fields must be filled');
  }

  next();
};
