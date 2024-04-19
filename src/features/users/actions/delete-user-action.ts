'use server';

import { deleteUserData } from '@/shared/data/user/delete-user';
import { createDbClient } from '@/shared/db/create-db-client';
import { redirect } from 'next/navigation';

export async function deleteUserAction(formData: FormData) {
  const id = formData.get('id') as string;
  const dbClient = createDbClient();
  await deleteUserData({ dbClient, id });

  redirect('/users');
}
