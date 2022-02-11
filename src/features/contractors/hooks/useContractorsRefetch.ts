import { useAppSelector } from 'core/store';
import { queryClient } from 'core/query';
import { getQueryKey } from './useContractors';

const useContractorsRefetch = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const refetch = () => {
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  return { refetch };
};

export default useContractorsRefetch;
