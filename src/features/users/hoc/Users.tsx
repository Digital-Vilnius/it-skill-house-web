import React, { FC } from 'react';
import { useUsers } from '../hooks';
import { useAppSelector } from 'core/store';
import { UsersTable } from '../components';

const Users: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { users, total } = useUsers({ filter, paging, sort });

  return <UsersTable users={users} total={total} />;
};

export default Users;
