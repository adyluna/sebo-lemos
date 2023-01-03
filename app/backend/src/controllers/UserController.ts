import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import Jwt from "../utils/Jwt";
import UserService from '../services/UserService';

export default class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;
  private _jwt: Jwt;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this._jwt = new Jwt();
    this.service = new UserService(this._jwt);
  }
  
  public async createUser() {
    const user: IUser = {
      name: this.req.body.name,
      email: this.req.body.email,
      role: 'user',
      password: this.req.body.password
    }

    try {
      await this.service.createUser(user);
      delete user.password;
      return this.res.status(201).json(user);
    } catch (error) {
      this.next(error);
    }
  }

  public async login() {
    const { email, password } = this.req.body;
    
    const token = await this.service.login(email, password);

    if (token) return this.res.status(201).json({ token });

    return this.res.status(400).json({ message: 'User not found!' });
  }

  public validateToken = (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { role } = this.service.validateLogin(authorization as string);

    return res.status(200).json({ role });
  };

}