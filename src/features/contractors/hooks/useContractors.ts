import { ContractorsFilter } from '../types';
import { Paging, Sort } from 'api/types';
import { ContractorsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapContractor, mapContractorFilter } from '../map';

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
  const apiFilter = mapContractorFilter(filter);

  const getContractorsFn = () => ContractorsClient.getContractors({ filter: apiFilter, paging, sort });
  const { isLoading, data } = useQuery(getQueryKey(filter, paging, sort), getContractorsFn, {
    keepPreviousData: true,
  });

  return {
    isLoading,
    count: data?.count ?? 0,
    contractors: data?.result?.map(mapContractor) ?? [],
  };
};

export default useContractors;
