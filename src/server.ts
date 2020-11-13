import express from 'express';
import "express-async-errors";
import errorHandler from "./errors/handler";
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5500;
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(port, () => console.log('Server Running'));
