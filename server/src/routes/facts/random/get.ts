import { z } from 'zod';
import type { Request, Response } from 'express';
import getMultipleRandom from '../../../utils/getMultipleRandom';
import type { Database } from '../../../schemas/database';

type CreateGetRandomFactsParams = {
  readonly getDatabase: () => Database;
};

function createGetRandomFacts({ getDatabase }: CreateGetRandomFactsParams) {
  return {
    '/facts/random': (req: Request, res: Response) => {
      const queryParams = z.object({
        amount: z.string().regex(/^\d+$/).transform(Number),
      });
      const validatedQueryParams = queryParams.parse(req.query);

      const catFacts = getDatabase().facts;

      const randomCatFacts = getMultipleRandom({ elements: catFacts, amount: validatedQueryParams.amount });

      res.send(randomCatFacts);
    },
  };
}

export default createGetRandomFacts;
