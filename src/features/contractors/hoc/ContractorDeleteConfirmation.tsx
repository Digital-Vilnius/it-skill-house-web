import React, { FC } from 'react';
import { useContractor, useContractorDelete, useContractorsRefetch } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorDeleteConfirmation as ControlledContractorDeleteConfirmation } from '../components';

export interface ContractorDeleteConfirmationProps {
  id: number;
}

const ContractorDeleteConfirmation: FC<ContractorDeleteConfirmationProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { deleteContractor } = useContractorDelete();
  const { refetch } = useContractorsRefetch();
  const { contractor } = useContractor(id);

  const handleOnSubmit = async () => {
    await deleteContractor(id);
    await refetch();
    hideModal();
  };

  return (
    <ControlledContractorDeleteConfirmation
      contractor={contractor}
      onClose={hideModal}
      onSubmit={handleOnSubmit}
    />
  );
};

export default ContractorDeleteConfirmation;
