import { z } from 'zod';

const catFactSchema = z.object({
  username: z.string().min(1).max(255),
  text: z.string().min(1).max(255),
  createdAt: z.number(),
});

type CatFact = z.infer<typeof catFactSchema>;

const saveCatFactParamsSchema = z.object({
  // Obviously username should come from auth
  username: z.string().min(1).max(255),
  text: z.string().min(1).max(255),
});

type SaveCatFactParams = z.infer<typeof saveCatFactParamsSchema>;

export { saveCatFactParamsSchema };
export type { CatFact, SaveCatFactParams };
