import { Router } from 'express';
import BookController from '../controllers/BookController';

const routes = Router();

routes.post('/addbook', (req, res, next) => new BookController(req, res, next).insertBook());
routes.get('/allbooks', (req, res, next) => new BookController(req, res, next).findBooks());
routes.get('/findbook', (req, res, next) => new BookController(req, res, next).findBook());

export default routes;