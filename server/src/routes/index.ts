import type { Database } from '../schemas/database';
import createGetRandomFacts from './facts/random/get';
import createPostFact from './facts/post';

type CreateRoutesParams = {
  readonly getDatabase: () => Database;
  readonly saveDatabase: (database: Database) => void;
};

function createRoutes({ getDatabase, saveDatabase }: CreateRoutesParams) {
  return {
    get: {
      ...createGetRandomFacts({ getDatabase }),
    },
    post: {
      ...createPostFact({ getDatabase, saveDatabase }),
    },
  };
}

export default createRoutes;
