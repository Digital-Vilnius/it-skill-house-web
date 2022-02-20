import React, { FC } from 'react';
import { useUsers } from '../hooks';
import { mapUserOption } from '../map';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';

const UsersSelect: FC<FormSelectProps> = (props) => {
  const { isLoading, users } = useUsers();

  return <FormSelect {...props} loading={isLoading} options={users.map(mapUserOption)} />;
};

export default UsersSelect;
