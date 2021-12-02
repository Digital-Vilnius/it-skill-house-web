import { User, UsersFilter } from 'api/clients/users/types';
import { ListResponse, Paging, Sort } from 'api/types';
import { UsersClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapUser } from '../map';

interface Props {
  filter: UsersFilter;
  paging: Paging;
  sort: Sort;
}

export const getQueryKey = (filter: UsersFilter, paging: Paging, sort: Sort) => {
  return ['users', filter, paging, sort];
};

const useUsers = (props: Props) => {
  const { filter, paging, sort } = props;

  const getUsersFn = () => UsersClient.getUsers({ filter, paging, sort });
  const { isLoading, data } = useQuery<ListResponse<User>>(getQueryKey(filter, paging, sort), getUsersFn, { keepPreviousData: true });

  return {
    isLoading,
    total: data?.total ?? 0,
    users: data?.result?.map(mapUser) ?? [],
  };
};

export default useUsers;
