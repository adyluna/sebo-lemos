import Book from "../domain/Book";
import IBook from "../interfaces/IBook";
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
    const newBook = await bookODM.create(book);

    return this.createBookDomain(newBook);
  }

  public async insertManyBooks(books: IBook[]) {
    const bookODM = new BookODM();
    const insertedBooks = await bookODM.insertMany(books);
    const withDomain = insertedBooks.map((book) => this.createBookDomain(book));

    return withDomain
  }

  public async findBooks() {
    const bookODM = new BookODM();
    const books = await bookODM.findAll();
    const withDomain = books.map((book) => this.createBookDomain(book));
    return withDomain;
  }
}

export default BookService;