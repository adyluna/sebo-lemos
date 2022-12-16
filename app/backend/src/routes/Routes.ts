import { Router } from 'express';
import BookController from '../controllers/BookController';

const routes = Router();

routes.post('/addbook', (req, res, next) => new BookController(req, res, next).create());
routes.get('/books', (req, res, next) => new BookController(req, res, next).getBooks());

export default routes;