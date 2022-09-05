import { z } from 'zod';

// TODO: Validate API return with zod
const catFactSchema = z.object({
  username: z.string(),
  text: z.string(),
  createdAt: z.number(),
});

type CatFact = z.infer<typeof catFactSchema>;

// TODO: Validate form with zod
const createCatFactParamsSchema = z.object({
  username: z.string(),
  text: z.string(),
});

type CreateCatFactParams = z.infer<typeof createCatFactParamsSchema>;

export type { CatFact, CreateCatFactParams };
