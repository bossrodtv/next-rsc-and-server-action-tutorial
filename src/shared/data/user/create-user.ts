import { type DbClient } from '@/shared/db/create-db-client';
import { type KyselySchema } from '@/shared/db/schema';
import { type InsertObject } from 'kysely';

export type CreateUserDataArgs = {
  dbClient: DbClient;
  values: InsertObject<KyselySchema, 'users'>;
};

export async function createUserData({ dbClient, values }: CreateUserDataArgs) {
  const [createdUser] = await dbClient.insertInto('users').values(values).returningAll().execute();

  return createdUser;
}
