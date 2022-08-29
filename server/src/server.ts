import type { NextFunction, Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import createRoutes from './routes';
import { getDatabase, saveDatabase } from './database';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const routes = createRoutes({ getDatabase, saveDatabase });
app.get('/facts/random', routes.get['/facts/random']);
app.post('/facts', routes.post['/facts']);

// Dummy error handling
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error({ err });
  res.status(500).send(err);
});

app.listen(port, () => {
  console.log('Server started!');
});
