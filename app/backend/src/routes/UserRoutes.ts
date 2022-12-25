import { Router } from 'express';
import UserController from '../controllers/UserController';
import { validateLogin, validateRegister } from '../middlewares/UserMiddleware';

const UserRoutes = Router();

UserRoutes.post('/login', validateLogin, (req, res, next) => new UserController(req, res, next).login());
UserRoutes.post('/register', validateRegister, (req, res, next) => new UserController(req, res, next).createUser());

export default UserRoutes;