import { z } from 'zod';

const catFactSchema = z.object({
  username: z.string(),
  text: z.string(),
  createdAt: z.number(),
});

type CatFact = z.infer<typeof catFactSchema>;

const saveCatFactParamsSchema = z.object({
  // Obviously username should come from auth
  username: z.string(),
  text: z.string(),
});

type SaveCatFactParams = z.infer<typeof saveCatFactParamsSchema>;

export { saveCatFactParamsSchema };
export type { CatFact, SaveCatFactParams };
