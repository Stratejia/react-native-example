import { z } from 'zod';
import type { Request, Response } from 'express';
import type { Database } from '../../schemas/database';

type CreatePostFactParams = {
  readonly getDatabase: () => Database;
  readonly saveDatabase: (database: Database) => void;
};

const bodySchema = z.object({
  // Obviously username should come from auth
  username: z.string(),
  text: z.string(),
});

function createPostFact({ getDatabase, saveDatabase }: CreatePostFactParams) {
  return {
    '/facts': (req: Request, res: Response) => {
      console.log('POST /facts', { body: req.body });

      const validatedBody = bodySchema.parse(req.body);

      const newCatFact = {
        username: validatedBody.username,
        text: validatedBody.text,
        createdAt: Date.now(),
      };

      const database = getDatabase();
      const newDatabase = {
        facts: [...database.facts, newCatFact],
      };
      saveDatabase(newDatabase);

      res.send(newCatFact);
    },
  };
}

export default createPostFact;
