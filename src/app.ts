import * as bodyParser from 'body-parser';
import express, { Application, NextFunction, Request, Response } from 'express';
// import * as logger from 'morgan';
const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(logger('dev'));
const port = 3000;

app.get('/listen', (req: Request, res: Response) => {
  res.send({
    name: 'Ajiboye',
  });
});

export default app;
