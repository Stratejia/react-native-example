import { z } from 'zod';

const catFactSchema = z.object({
  username: z.string().min(1).max(255),
  text: z.string().min(1).max(255),
  // TODO: Better timestamp validate would be nice
  createdAt: z.number(),
});

export { catFactSchema };
