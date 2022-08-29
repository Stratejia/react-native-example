import { z } from 'zod';
import type { Request, Response } from 'express';
import type { Database } from '../../schemas/database';

type CreatePostFactParams = {
  readonly getDatabase: () => Database;
  readonly saveDatabase: (database: Database) => void;
};

function createPostFactParams({ getDatabase, saveDatabase }: CreatePostFactParams) {
  return {
    '/facts': (req: Request, res: Response) => {
      const body = z.object({
        // Obviously username should come from auth
        username: z.string(),
        text: z.string(),
      });

      const validatedBody = body.parse(req.body);

      const newCatFact = {
        username: validatedBody.username,
        text: validatedBody.text,
        createdAt: Date.now(),
      };

      const database = getDatabase();
      // TODO: Kinda assuming we don't need a deep copy
      const newDatabase = {
        facts: [...database.facts, newCatFact],
      };
      saveDatabase(newDatabase);

      res.send(newCatFact);
    },
  };
}

export default createPostFactParams;
