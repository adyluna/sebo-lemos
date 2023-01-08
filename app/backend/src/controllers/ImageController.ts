import { NextFunction, Request, Response } from 'express';
import ImageService from '../services/ImageService';

export default class ImageController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ImageService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ImageService();
  }

  public async getImage() {
    const { bookName } = this.req.params;
    
    const image = await this.service.findImage(bookName);

    return this.res.status(201).json(image?.renderImage());
  }

  public async insertImage() {
    const image = await this.service.insertImage();
    return this.res.status(201).json(image);
  }

}