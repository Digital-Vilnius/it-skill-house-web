import { ContractorsFilter } from 'api/clients/contractors/types';
import { Paging, Sort } from 'api/types';
import { ContractorsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapContractor } from '../map';

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
  const { isLoading, data } = useQuery(getQueryKey(filter, paging, sort), getContractorsFn, { keepPreviousData: true });

  return {
    isLoading,
    total: data?.total ?? 0,
    contractors: data?.result?.map(mapContractor) ?? [],
  };
};

export default useContractors;
