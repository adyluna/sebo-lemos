import { IUser } from './IUser';

export default interface IJwt {
  createToken(data: IUser): string;
  validateToken(token: string): IUser;
}