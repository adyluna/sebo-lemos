import * as express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import BookRoutes from './routes/BookRoutes';
import UserRoutes from './routes/UserRoutes';
import ImageRoutes from './routes/ImageRoutes';

const app = express();
app.use(express.json());

const RAILWAY = "https://sebo-frontend-production.up.railway.app";
const LOCAL = "http://localhost:3000";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", RAILWAY);
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(ImageRoutes);
app.use(BookRoutes);
app.use(UserRoutes)
app.use(httpErrorMiddleware);

export default app;