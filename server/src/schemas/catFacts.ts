import { z } from 'zod';

const catFactSchema = z.object({
  username: z.string(),
  text: z.string(),
  // TODO: Better timestamp validate would be nice
  createdAt: z.number(),
});

export { catFactSchema };
