import React, { FC } from 'react';
import { useUsersColumns } from '../hooks';
import DataGrid from 'react-data-grid';
import { User } from '../types';

interface Props {
  users: User[];
  total: number;
}

const UsersTable: FC<Props> = (props) => {
  const { users } = props;
  const { columns } = useUsersColumns();

  return <DataGrid columns={columns} rows={users} />;
};

export default UsersTable;
