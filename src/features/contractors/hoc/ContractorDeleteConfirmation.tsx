import React, { FC } from 'react';
import { useContractor, useContractorDelete } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorDeleteConfirmation as ControlledContractorDeleteConfirmation } from '../components';

export interface ContractorDeleteConfirmationProps {
  id: number;
}

const ContractorDeleteConfirmation: FC<ContractorDeleteConfirmationProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { deleteContractor } = useContractorDelete();
  const { contractor } = useContractor(id);

  const handleOnSubmit = () => {
    deleteContractor(id).then(hideModal);
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
