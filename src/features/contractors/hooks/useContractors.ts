import { Paging, Sort } from 'api/types';
import { ContractorsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapContractor } from '../map';
import { ContractorsFilter } from 'api/clients/contractors/types';

interface Props {
  filter: ContractorsFilter;
  paging: Paging;
  sort: Sort;
}

export const getQueryKey = (filter: ContractorsFilter, paging: Paging, sort: Sort) => {
  return ['contractors', filter, paging, sort];
};

const useContractors = (props: Props) => {
  const { filter, paging, sort } = props;

  const getContractorsFn = () => ContractorsClient.getContractors({ filter, paging, sort });
  const { isLoading, data, refetch } = useQuery(getQueryKey(filter, paging, sort), getContractorsFn, {
    keepPreviousData: true,
  });

  return {
    isLoading,
    count: data?.count ?? 0,
    contractors: data?.result?.map(mapContractor) ?? [],
    refetch,
  };
};

export default useContractors;
