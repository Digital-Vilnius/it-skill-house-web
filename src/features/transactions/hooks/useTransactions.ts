import { useQuery } from 'react-query';
import { TransactionsFilter } from 'api/clients/transactions/types';
import { Paging, Sort } from 'api/types';
import { getTransactions } from 'api/clients/transactions';
import { mapTransaction } from '../map';

interface Props {
  filter: TransactionsFilter;
  paging: Paging;
  sort: Sort;
}

export const getQueryKey = (filter: TransactionsFilter, paging: Paging, sort: Sort) => {
  return ['transactions', filter, paging, sort];
};

const useTransactions = (props: Props) => {
  const { filter, paging, sort } = props;

  const getTransactionsFn = () => getTransactions({ filter, paging, sort });
  const { isLoading, data } = useQuery(getQueryKey(filter, paging, sort), getTransactionsFn, { keepPreviousData: true });

  return {
    isLoading,
    total: data?.total ?? 0,
    transactions: data?.data.map(mapTransaction) ?? [],
  };
};

export default useTransactions;
