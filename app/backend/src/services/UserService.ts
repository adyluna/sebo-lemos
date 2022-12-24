import User from "../domain/User";
import { IUser } from "../interfaces/IUser";
import UserODM from "../models/UserODM";

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

  public async insertUser(user: IUser) {
    const userODM = new UserODM();
    const newUser = await userODM.insert(user);

    return this.createUserDomain(newUser);
  }

  public async findUser(email: string): Promise<User | null> {
    const userODM = new UserODM();
    const result = await userODM.find(email);
    if (result) {
      return this.createUserDomain(result);
    }

    return null
  }
}

export default UserService;