import { ContractorsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapContractor } from '../map';

export const getQueryKey = (id: number) => {
  return ['contractor', id];
};

const useContractor = (id: number) => {
  const getContractorFn = () => ContractorsClient.getContractor(id);
  const { isLoading, data } = useQuery(getQueryKey(id), getContractorFn);

  return {
    isLoading,
    contractor: data ? mapContractor(data) : null,
  };
};

export default useContractor;
