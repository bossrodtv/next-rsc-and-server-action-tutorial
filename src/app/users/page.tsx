import { deleteUserAction } from '@/features/users/actions/delete-user-action';
import { AddUserForm } from '@/features/users/components/add-user-form';
import { Button } from '@/shared/components/ui/button';
import { getUsersData } from '@/shared/data/user/get-users';
import { createDbClient } from '@/shared/db/create-db-client';

export default async function UsersPage() {
  const dbClient = createDbClient();
  const data = await getUsersData({ dbClient });

  return (
    <div className="flex flex-col gap-5">
      <AddUserForm />
      {data.map(sample => (
        <div className="flex max-w-96 flex-col gap-2" key={sample.id}>
          <div>ID: {sample.id}</div>
          <div>Email: {sample.email}</div>
          <div>First Name: {sample.first_name}</div>
          <div>Last Name: {sample.last_name}</div>
          <div>Created At: {new Date(sample.created_at).toISOString()}</div>
          <form action={deleteUserAction}>
            <input type="hidden" name="id" value={sample.id} />
            <Button type="submit">Delete</Button>
          </form>
        </div>
      ))}
    </div>
  );
}
