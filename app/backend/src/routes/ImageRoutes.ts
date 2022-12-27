import { Router } from 'express';
import ImageController from '../controllers/ImageController';

const routes = Router();

routes.get('/images/:bookName', (req, res, next) => new ImageController(req, res, next).getImage());
routes.post('/images', (req, res, next) => new ImageController(req, res, next).insertImage());

export default routes;