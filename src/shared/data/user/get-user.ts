import { type DbClient } from '@/shared/db/create-db-client';

export type GetUserDataArgs = {
  dbClient: DbClient;
  id: string;
};

export async function getUserData({ dbClient, id }: GetUserDataArgs) {
  const [user] = await dbClient.selectFrom('users').where('id', '=', id).selectAll().execute();
  return user;
}
