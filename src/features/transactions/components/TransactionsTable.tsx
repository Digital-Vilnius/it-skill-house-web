import React, { FC } from 'react';
import { useTransactionsColumns } from '../hooks';
import DataGrid from 'react-data-grid';
import { Transaction } from '../types';

interface Props {
  transactions: Transaction[];
  total: number;
}

const TransactionsTable: FC<Props> = (props) => {
  const { transactions } = props;
  const { columns } = useTransactionsColumns();

  return <DataGrid columns={columns} rows={transactions} />;
};

export default TransactionsTable;
