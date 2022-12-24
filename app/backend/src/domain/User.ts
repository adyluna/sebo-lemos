class User {
  private id?: string | undefined;
  private name: string;
  private email: string;
  private role: string;
  private password?: string;

  constructor(
    name: string,
    email: string,
    role: string,
    password?: string,
  ) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}

export default User;