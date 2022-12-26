import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi = require('joi');

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

  const validateEmail = (email: string) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
  
    return schema.validate(email);
  };

  if (validateEmail(email).error) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};
