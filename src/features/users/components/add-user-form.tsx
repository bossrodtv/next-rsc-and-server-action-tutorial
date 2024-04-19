'use client';

import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { createUserAction } from '../actions/create-user-action';

export const addUserSchema = z.object({
  email: z.string().email().toLowerCase(),
  firstName: z.string().min(1).nullable(),
  lastName: z.string().min(1).nullable(),
});

export type AddUser = z.infer<typeof addUserSchema>;

export function AddUserForm() {
  const { register, handleSubmit, formState } = useForm<AddUser>({
    resolver: zodResolver(addUserSchema),
  });

  const onSubmit: SubmitHandler<AddUser> = async data => {
    await createUserAction({
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        aria-label="Email"
        label="Email"
        error={formState.errors.email?.message}
        {...register('email')}
      />
      <Input
        aria-label="First Name"
        label="First Name"
        error={formState.errors.firstName?.message}
        {...register('firstName')}
      />
      <Input
        aria-label="Last Name"
        label="Last Name"
        error={formState.errors.lastName?.message}
        {...register('lastName')}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
}
