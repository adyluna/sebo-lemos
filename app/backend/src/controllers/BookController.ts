import { NextFunction, Request, Response } from 'express';
import IBook from '../interfaces/IBook';
import BookService from '../services/BookService';

export default class BookController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: BookService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new BookService();
  }
  
  public async insertBook() {
    const book: IBook = {
      name: this.req.body.name,
      author: this.req.body.author,
      quantity: this.req.body.quantity,
      genre: this.req.body.genre,
      condition: this.req.body.condition,
      price: this.req.body.price
    }

    try {
      const newBook = await this.service.insertBook(book);
      return this.res.status(201).json(newBook);
    } catch (error) {
      this.next(error);
    }
  }

  public async findBook() {
    const condition = this.req.body;
    
    const book = await this.service.findBook(condition);

    if (book) return this.res.status(201).json(book);

    return this.res.status(400).json({ message: 'Cant find any matching book' });
  }

  public async findBooks() {
    const books = await this.service.findBooks();
    return this.res.status(201).json(books);
  }
}