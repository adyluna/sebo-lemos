import { Model, Schema, model, models } from 'mongoose';
import { IUser } from '../interfaces/IUser';

class UserODM {
  private schema: Schema;
  private model: Model<IUser>;

  constructor() {
    this.schema = new Schema<IUser>({
      id: { type: Number, required: false },
      name: { type: String, required: true },
      email: { type: String, required: true },
      role: { type: String, required: true },
      password: { type: String, required: false }
    });

    this.model = models.User || model('User', this.schema);
  }

  public async insert(user: IUser): Promise<IUser> {
    return await this.model.create({...user});
  }

  public async findOne(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({email});

    if (user) return user;
    return null;
  }

}

export default UserODM;