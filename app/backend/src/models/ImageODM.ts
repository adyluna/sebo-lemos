import { Model, Schema, model, models } from 'mongoose';
import IImage from '../interfaces/IImage';

class ImageODM {
  private schema: Schema;
  private model: Model<IImage>;

  constructor() {
    this.schema = new Schema<IImage>({
      bookName: { type: String, required: true },
      file: { type: String, required: true }
    });

    this.model = models.Image || model('Image', this.schema);
  }

  public async find(bookName: string): Promise<IImage | null> {
    const image = await this.model.findOne({bookName});

    if (image) return image
    return null;
  }
}

export default ImageODM;