import React, { FC } from 'react';
import { useContractorsFilterForm } from '../hooks';
import { useAppSelector } from 'core/store';
import { ContractorsFilterForm as ControlledContractorsFilter } from '../components';
import { useModal } from 'core/modal/hooks';

const ContractorsFilter: FC = () => {
  const { hideModal } = useModal();
  const { filter } = useAppSelector((state) => state.contractors);

  const { save, reset } = useContractorsFilterForm({
    filter,
    onSuccess: hideModal,
  });

  return (
    <ControlledContractorsFilter
      filter={filter}
      onClose={hideModal}
      onSubmit={save}
      onReset={reset}
    />
  );
};

export default ContractorsFilter;
