import { ContractorsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapContractor } from '../map';

interface Props {
  id: string;
}

export const getQueryKey = (id: string) => {
  return ['contractor', id];
};

const useContractor = (props: Props) => {
  const { id } = props;

  const getContractorFn = () => ContractorsClient.getContractor(id);
  const { isLoading, data } = useQuery(getQueryKey(id), getContractorFn);

  return {
    isLoading,
    contractor: data ? mapContractor(data.result) : null,
  };
};

export default useContractor;
