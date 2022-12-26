export interface IUser {
  id?: number;
  name: string;
  email: string;
  role: string;
  password?: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  email?: string;
  password?: string;
}