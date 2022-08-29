import { z } from 'zod';

const factSchema = z.object({
  text: z.string(),
  // TODO: Better timestamp validate would be nice
  createdAt: z.number(),
});

export { factSchema };
