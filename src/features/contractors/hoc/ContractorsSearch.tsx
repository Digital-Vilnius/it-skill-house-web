import React, { FC } from 'react';
import { ContractorsSearch as ControllerContractorsSearch } from '../components';

const ContractorsSearch: FC = () => {
  return <ControllerContractorsSearch onKeywordChange={console.log} keyword='' />;
};

export default ContractorsSearch;
