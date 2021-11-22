import React, { FC } from 'react';
import { useTransactions } from '../hooks';
import { TransactionsTable } from '../components';
import { useAppSelector } from 'core/store';

const Transactions: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.transactions);
  const { transactions, total } = useTransactions({ filter, paging, sort });

  return <TransactionsTable transactions={transactions} total={total} />;
};

export default Transactions;
