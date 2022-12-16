import * as express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import routes from './routes/Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(httpErrorMiddleware);

export default app;