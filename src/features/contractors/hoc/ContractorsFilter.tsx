import React, { FC } from 'react';
import { useContractorsFilterForm } from '../hooks';
import { useAppSelector } from 'core/store';
import { ContractorsFilter as ControlledContractorsFilter } from '../components';
import { useModal } from 'core/modal/hooks';

const ContractorsFilter: FC = () => {
  const { hideModal } = useModal();
  const { filter } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, save, reset } = useContractorsFilterForm({
    filter,
    onSuccess: hideModal,
  });

  return (
    <ControlledContractorsFilter
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
      onReset={reset}
    />
  );
};

export default ContractorsFilter;
