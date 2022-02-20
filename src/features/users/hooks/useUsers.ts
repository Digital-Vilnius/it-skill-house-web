import { UsersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapUser } from '../map';

export const getQueryKey = () => {
  return ['users'];
};

const useUsers = () => {
  const getUsersFn = () => UsersClient.getUsers();
  const { isLoading, data } = useQuery(getQueryKey(), getUsersFn);
  const users = data?.result?.map(mapUser) ?? [];
  const count = data?.count ?? 0;

  return {
    isLoading,
    count,
    users,
  };
};

export default useUsers;
