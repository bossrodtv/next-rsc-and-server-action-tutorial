import { type DbClient } from '@/shared/db/create-db-client';

export type GetUsersDataArgs = {
  dbClient: DbClient;
};

export async function getUsersData({ dbClient }: GetUsersDataArgs) {
  const users = await dbClient.selectFrom('users').selectAll().execute();
  return users;
}
