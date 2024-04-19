import { type DbClient } from '@/shared/db/create-db-client';

export type DeleteUserDataArgs = {
  dbClient: DbClient;
  id: string;
};

export async function deleteUserData({ dbClient, id }: DeleteUserDataArgs) {
  const [deletedUser] = await dbClient
    .deleteFrom('users')
    .where('id', '=', id)
    .returningAll()
    .execute();

  return deletedUser;
}
