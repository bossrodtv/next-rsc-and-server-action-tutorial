'use server';

import { deleteUserData } from '@/shared/data/user/delete-user';
import { dbClient } from '@/shared/db/create-db-client';
import { redirect } from 'next/navigation';

export async function deleteUserAction(formData: FormData) {
  const id = formData.get('id') as string;
  await deleteUserData({ dbClient, id });

  redirect('/users');
}
