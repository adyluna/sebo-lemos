import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';
import Joi = require('joi');
import { IRegister } from '../interfaces/IUser';

const validateEmail = (email: IRegister) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  return schema.validate(email);
};

const validatePassword = (password: IRegister) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
  });

  return schema.validate(password);
};

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

  if (validateEmail({email}).error) {
    return res.status(400).json({ message: 'Email must be a valid email' });
  }

  if (validatePassword({password}).error) {
    return res.status(400).json({ message: 'Password must be a minimum of 6 characters and a maximum of 12' });
  }

  next();
};
