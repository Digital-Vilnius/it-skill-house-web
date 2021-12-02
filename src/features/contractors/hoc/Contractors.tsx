import React, { FC } from 'react';
import { useContractors } from '../hooks';
import { useAppSelector } from 'core/store';
import { ContractorsTable } from '../components';

const Contractors: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, total } = useContractors({ filter, paging, sort });

  return <ContractorsTable contractors={contractors} total={total} />;
};

export default Contractors;
