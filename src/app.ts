import axios from 'axios';
import { urlencoded } from 'body-parser';
import express, { Application, NextFunction, Request, Response } from 'express';
import logger from 'morgan';
// import apiRoutes from './routes/api';
const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(logger('dev'));
// app.use('/api', apiRoutes);

app.get('/listen', (req: Request, res: Response) => {
  res.send({
    name: 'Ajiboye',
  });
});

export default app;
