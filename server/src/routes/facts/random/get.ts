import { z } from 'zod';
import type { Request, Response } from 'express';
import getMultipleRandom from '../../../utils/getMultipleRandom';
import type { Database } from '../../../schemas/database';

type CreateGetRandomFactsParams = {
  readonly getDatabase: () => Database;
};

const queryParamsSchema = z.object({
  amount: z.string().regex(/^\d+$/).transform(Number),
});

function createGetRandomFacts({ getDatabase }: CreateGetRandomFactsParams) {
  return {
    '/facts/random': (req: Request, res: Response) => {
      const validatedQueryParams = queryParamsSchema.parse(req.query);

      const catFacts = getDatabase().facts;

      const randomCatFacts = getMultipleRandom({ elements: catFacts, amount: validatedQueryParams.amount });

      res.send(randomCatFacts);
    },
  };
}

export default createGetRandomFacts;
