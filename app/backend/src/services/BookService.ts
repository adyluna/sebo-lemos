import Book from "../domain/Book";
import IBook, { ICondition } from "../interfaces/IBook";
import BookODM from "../models/BookODM";

class BookService {

  private createBookDomain(book: IBook | null): Book | null {
    if(book) {
      return new Book(
        book.name,
        book.author,
        book.quantity,
        book.genre,
        book.condition,
        book.price
      )
    }

    return null;
  }

  public async insertBook(book: IBook) {
    const bookODM = new BookODM();
    const newBook = await bookODM.insert(book);

    return this.createBookDomain(newBook);
  }

  public async insertManyBooks(books: IBook[]) {
    const bookODM = new BookODM();
    const insertedBooks = await bookODM.insertMany(books);
    const withDomain = insertedBooks.map((book) => this.createBookDomain(book));

    return withDomain
  }

  public async findBook(condition: ICondition): Promise<Book | null> {
    const bookODM = new BookODM();
    const book = await bookODM.find(condition);
    const withDomain = this.createBookDomain(book);

    return withDomain;
  }

  public async findBooks(): Promise<Book[]> {
    const bookODM = new BookODM();
    const books = await bookODM.findAll();
    const withDomain = books.map((book) => this.createBookDomain(book));

    return withDomain as Book[];
  }
}

export default BookService;