import { Model, Schema, model, models } from 'mongoose';
import IBook, { ICondition } from '../interfaces/IBook';

class BookODM {
  private schema: Schema;
  private model: Model<IBook>;

  constructor() {
    this.schema = new Schema<IBook>({
      id: { type: Number, required: false },
      name: { type: String, required: true },
      author: { type: String, required: true },
      genre: { type: String, required: false },
      condition: { type: String, required: false },
      price: { type: Number, required: false },
      quantity: { type: Number, required: true },
    });

    this.model = models.Book || model('Book', this.schema);
  }

  public async insert(book: IBook): Promise<IBook> {
    return await this.model.create({...book});
  }

  public async insertMany(books: IBook[]): Promise<IBook[]> {
    const insertedBooks = await this.model.insertMany(books);

    return insertedBooks;
  }

  public async find(condition: ICondition): Promise<IBook[] | null> {
    const [...book] = await this.model.find(condition);

    
    if (book.length > 0) return [...book];
    return null;
  }

  public async findAll(): Promise<IBook[]> {
    const books = await this.model.find();
    
    return books;
  }

}

export default BookODM;