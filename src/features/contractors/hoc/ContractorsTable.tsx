import React, { FC } from 'react';
import { useContractors } from '../hooks';
import { useAppSelector } from 'core/store';

const ContractorsTable: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, total } = useContractors({ filter, paging, sort });

  return <div />;
};

export default ContractorsTable;
