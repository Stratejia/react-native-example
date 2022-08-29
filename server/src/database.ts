import fs from 'fs';
import type { Database } from './schemas/database';
import { databaseSchema } from './schemas/database';

const filename = 'database.json';
const encoding = 'utf8';

function getDatabase() {
  const fileData = fs.readFileSync(filename, encoding);
  const database = JSON.parse(fileData);
  return databaseSchema.parse(database);
}

function saveDatabase(database: Database) {
  const validatedDatabase = databaseSchema.parse(database);
  fs.writeFileSync(filename, JSON.stringify(validatedDatabase));
}

export { getDatabase, saveDatabase };
