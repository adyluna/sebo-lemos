import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import UserService from '../services/UserService';

export default class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }
  
  public async insertUser() {
    const user: IUser = {
      name: this.req.body.name,
      email: this.req.body.email,
      role: 'user',
      password: this.req.body.password
    }

    try {
      await this.service.insertUser(user);
      delete user.password;
      return this.res.status(201).json({ user });
    } catch (error) {
      this.next(error);
    }
  }

  public async findUser() {
    const { email } = this.req.body;
    
    const user = await this.service.findUser(email);

    if (user) return this.res.status(201).json({ message: "User found!" });

    return this.res.status(400).json({ message: 'User not found!' });
  }

}