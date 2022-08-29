import type { Database } from '../schemas/database';
import createGetRandomFacts from './facts/random/get';
import createPostFactParams from './facts/post';

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
      ...createPostFactParams({ getDatabase, saveDatabase }),
    },
  };
}

export default createRoutes;
