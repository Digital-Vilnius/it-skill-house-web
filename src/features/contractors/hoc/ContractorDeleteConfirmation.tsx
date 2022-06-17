import React, { FC } from 'react';
import { useContractorDelete, useContractorsRefetch } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorDeleteConfirmation as ControlledContractorDeleteConfirmation } from '../components';
import { useNavigate } from 'react-router-dom';

export interface ContractorDeleteConfirmationProps {
  id: number;
}

const ContractorDeleteConfirmation: FC<ContractorDeleteConfirmationProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { deleteContractor } = useContractorDelete();
  const { refetch } = useContractorsRefetch();
  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    await deleteContractor(id);
    navigate('/admin/contractors');
    await refetch();
    hideModal();
  };

  return <ControlledContractorDeleteConfirmation onClose={hideModal} onSubmit={handleOnSubmit} />;
};

export default ContractorDeleteConfirmation;
