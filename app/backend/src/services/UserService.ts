import { compareSync, hashSync } from 'bcryptjs';
import HttpException from '../utils/HttpException';
import User from "../domain/User";
import { IUser } from "../interfaces/IUser";
import UserODM from "../models/UserODM";
import Jwt from "../utils/Jwt";

class UserService {

  constructor(private _jwt: Jwt) { }

  private createUserDomain(user: IUser | null): User | null {
    if(user) {
      return new User(
        user.name,
        user.email,
        user.role,
        user.password
      )
    }

    return null;
  }

  login = async (email: string, password: string): Promise<string> => {
    const userODM = new UserODM();
    const userInfo = await userODM.findOne(email);

    if (!userInfo || !compareSync(password, userInfo.password as string)) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    const token = this._jwt.createToken({
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role as string,
    });

    return token;
  };

  public async findUser(email: string): Promise<User | null> {
    const userODM = new UserODM();
    const result = await userODM.findOne(email);
    if (result) {
      return this.createUserDomain(result);
    }

    return null
  }

  public async createUser(user: IUser) {
    const userODM = new UserODM();

    const userAlreadyExists = await this.findUser(user.email)
    if (userAlreadyExists) {
      throw new HttpException(401, 'User already exists');
    }

    user.password = hashSync(user.password as string);
    const newUser = await userODM.insert(user);
    return this.createUserDomain(newUser);
  }
}

export default UserService;