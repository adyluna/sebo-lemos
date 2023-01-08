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

  public renderImage() {
    const buf = Buffer.from(this._file);
    const b64 = buf.toString('base64');
    const mimeType = 'image/webp';
    
    return `data:${mimeType};base64,${b64}`;
  }
}

export default Image;