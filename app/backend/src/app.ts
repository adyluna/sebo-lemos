import * as express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import routes from './routes/Routes';

const app = express();
app.use(express.json());

const RAILWAY = "https://sebo-frontend-production.up.railway.app";
const LOCAL = "http://localhost:3000";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", LOCAL); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(routes);
app.use(httpErrorMiddleware);

export default app;