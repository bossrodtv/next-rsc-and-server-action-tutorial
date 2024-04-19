'use server';

import { createUserData, type CreateUserDataArgs } from '@/shared/data/user/create-user';
import { createDbClient } from '@/shared/db/create-db-client';
import { redirect } from 'next/navigation';

export async function createUserAction(values: CreateUserDataArgs['values']) {
  const dbClient = createDbClient();
  await createUserData({ dbClient, values });

  redirect('/users');
}
