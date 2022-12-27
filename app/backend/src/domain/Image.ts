class Image {
  private _bookName: string;
  private _file: Buffer;

  constructor(
    bookName: string,
    file: Buffer,
  ) {
    this._bookName = bookName;
    this._file = file;

  }

  public getFile() {
    return this._file;
  }
}

export default Image;