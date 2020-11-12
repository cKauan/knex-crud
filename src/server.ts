import express from 'express';
import "express-async-errors";
import errorHandler from "./errors/handler";
import routes from './routes';

const app = express();
const port = 5500 || process.env.PORT;
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(port, () => console.log('Server Running'));
