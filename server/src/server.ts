import express from 'express';
import bodyParser from 'body-parser';
import { z } from 'zod';
import getMultipleRandom from './utils/getMultipleRandom';

const app = express();
const port = 3000;

const catFacts = [
  {
    text: 'Boulette is a beautiful cat!',
    createdAt: 1641013200000,
  },
  {
    text: "Le p'tit chat is really cute!",
    createdAt: 1655006400000,
  },
  {
    text: 'Zelda was the best cat.',
    createdAt: 1661468344890,
  },
];

app.use(bodyParser.json());

app.get('/facts/random', (req, res) => {
  const queryParams = z.object({
    amount: z.string().regex(/^\d+$/).transform(Number),
  });

  const validatedQueryParams = queryParams.parse(req.query);

  const randomCatFacts = getMultipleRandom({ elements: catFacts, amount: validatedQueryParams.amount });

  res.send(randomCatFacts);
});

app.listen(port, () => {
  console.log('Server started!');
});
