import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setFilter } from '../slice';
import { ContractorsSearch as ControllerContractorsSearch } from '../components';

const ContractorsSearch: FC = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.contractors);

  const handleKeywordChange = () => {
    dispatch(setFilter({ ...filter }));
  };

  return <ControllerContractorsSearch onKeywordChange={handleKeywordChange} keyword='' />;
};

export default ContractorsSearch;
