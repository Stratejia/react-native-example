import { z } from 'zod';
import { factSchema } from './facts';

const databaseSchema = z.object({
  facts: z.array(factSchema),
});

type Database = z.infer<typeof databaseSchema>;

export { databaseSchema };
export type { Database };
