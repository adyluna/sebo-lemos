import { Model, Schema, model, models } from 'mongoose';
import IImage from '../interfaces/IImage';
import * as fs from 'fs';

class ImageODM {
  private schema: Schema;
  private model: Model<IImage>;

  constructor() {
    this.schema = new Schema<IImage>({
      bookName: { type: String, required: true },
      file: { type: Buffer, required: true }
    });

    this.model = models.Image || model('Image', this.schema);
  }

  public async find(bookName: string): Promise<IImage | null> {
    const image = await this.model.findOne({bookName});

    if (image) return image;
    return null;
  }

  public async insertImage(): Promise<IImage | null> {
    const image = fs.readFileSync('/Users/ady/Documents/Ady/Projetos/SeboLemos/sebo-lemos/app/backend/src/uploads/a-arte-de-curar-nos-tempos-da-colonia-01.webp')
    const savedImage = await this.model.create({ bookName: "test01", file: image });

    return savedImage;
  }
}

export default ImageODM;