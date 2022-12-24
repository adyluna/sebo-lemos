import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middlewares/login.middleware';

const UserRoutes = Router();

UserRoutes.post('/login', validateLogin, (req, res, next) => new UserController(req, res, next).findUser());

export default UserRoutes;