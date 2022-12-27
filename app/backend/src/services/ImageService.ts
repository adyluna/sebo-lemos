import HttpException from "../utils/HttpException";
import Image from "../domain/Image";
import IImage from "../interfaces/IImage";
import ImageODM from "../models/ImageODM";

class ImageService {

  private createImageDomain(image: IImage | null): Image | null {
    if(image) {
      return new Image(
        image.bookName,
        image.file
      )
    }

    return null;
  }

  public async findImage(bookName: string): Promise<Image | null> {
    const imageODM = new ImageODM();
    const result = await imageODM.find(bookName);
    if (result) {
      return this.createImageDomain(result);
    }

    throw new HttpException(400, 'Imagem não encontrada')
  }

  public async insertImage(): Promise<Image | null> {
    const imageODM = new ImageODM();
    const result = await imageODM.insertImage(); 

    return this.createImageDomain(result);
  }
}

export default ImageService;