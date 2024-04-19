'use server';

import { createUserData, type CreateUserDataArgs } from '@/shared/data/user/create-user';
import { dbClient } from '@/shared/db/create-db-client';
import { redirect } from 'next/navigation';

export async function createUserAction(values: CreateUserDataArgs['values']) {
  await createUserData({ dbClient, values });

  redirect('/users');
}
