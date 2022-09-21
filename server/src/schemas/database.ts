import { z } from 'zod';
import { catFactSchema } from './catFacts';

const databaseSchema = z.object({
  facts: z.array(catFactSchema),
});

type Database = z.infer<typeof databaseSchema>;

export { databaseSchema };
export type { Database };
