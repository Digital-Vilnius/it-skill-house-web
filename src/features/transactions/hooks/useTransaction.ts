import { useQuery } from 'react-query';
import { getTransaction } from 'api/clients/transactions';
import { mapTransaction } from '../map';

interface Props {
  id: string;
}

export const getQueryKey = (id: string) => {
  return ['transaction', id];
};

const useTransaction = (props: Props) => {
  const { id } = props;

  const getTransactionFn = () => getTransaction(id);
  const { isLoading, data } = useQuery(getQueryKey(id), getTransactionFn);

  return {
    isLoading,
    transaction: data ? mapTransaction(data) : null,
  };
};

export default useTransaction;
