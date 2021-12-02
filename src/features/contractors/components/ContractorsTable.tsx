import React, { FC } from 'react';
import { Contractor } from '../types';
import { DataTable } from 'components';
import { Column } from 'components/DataTable/types';

interface Props {
  contractors: Contractor[];
  total: number;
  columns: Column<Contractor>[];
}

const ContractorsTable: FC<Props> = (props) => {
  const { contractors, columns } = props;

  return <DataTable columns={columns} data={contractors} />;
};

export default ContractorsTable;
