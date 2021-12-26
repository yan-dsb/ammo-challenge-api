import 'reflect-metadata';
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import createConnection from './database';
import routes from './routes';
import './container';
import { AppError } from './errors/AppError';
import upload from './config/upload';
import swaggerFile from './swagger.json';

createConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/product', express.static(`${upload.tmpFolder}/products`));

app.use(routes);
app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ error: err.message });
    }

    console.error(err);

    return response.status(500).json({ error: `Internal server error ${err}` });
  }
);

app.listen(3333, () => console.log('Server is running!'));
