import React, { FC } from 'react';
import { useContractorsColumns } from '../hooks';
import DataGrid from 'react-data-grid';
import { Contractor } from '../types';

interface Props {
  contractors: Contractor[];
  total: number;
}

const ContractorsTable: FC<Props> = (props) => {
  const { contractors } = props;
  const { columns } = useContractorsColumns();

  return <DataGrid columns={columns} rows={contractors} />;
};

export default ContractorsTable;
