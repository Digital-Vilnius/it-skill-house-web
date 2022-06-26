import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { ContractorsFilter as ControlledContractorsFilter } from '../components';
import { useModal } from 'core/modal/hooks';
import { ContractorsFilter as ContractorsFilterType } from 'api/clients/contractors/types';
import { selectContractorsFilter } from '../selectors';
import { resetFilter, setFilter } from '../slice';

const ContractorsFilter: FC = () => {
  const { hideModal } = useModal();

  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectContractorsFilter);

  const handleOnSubmit = (newFilter: ContractorsFilterType) => {
    dispatch(setFilter({ filter: newFilter }));
    hideModal();
  };

  const handleOnReset = () => {
    dispatch(resetFilter());
    hideModal();
  };

  return (
    <ControlledContractorsFilter
      filter={filter}
      onClose={hideModal}
      onSubmit={handleOnSubmit}
      onReset={handleOnReset}
    />
  );
};

export default ContractorsFilter;
