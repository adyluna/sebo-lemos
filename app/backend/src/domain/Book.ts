class Book {
  private id?: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  private name: string;
  private author: string;
  private genre?: string;
  private condition?: string;
  private price?: number;
  private quantity: number;

  constructor(
    name: string,
    author: string,
    quantity: number,
    genre?: string,
    condition?: string,
    price?: number,
  ) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.condition = condition;
    this.price = price;
    this.quantity = quantity;
  }

  public getId() {
    return this.id;
  }
}

export default Book;