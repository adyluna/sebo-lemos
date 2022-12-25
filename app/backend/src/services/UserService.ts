import User from "../domain/User";
import { IUser } from "../interfaces/IUser";
import UserODM from "../models/UserODM";
import HttpException from "../utils/HttpException";

class UserService {

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

  public async findUser(email: string): Promise<User | null> {
    const userODM = new UserODM();
    const result = await userODM.find(email);
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

    const newUser = await userODM.insert(user);
    return this.createUserDomain(newUser);
  }
}

export default UserService;