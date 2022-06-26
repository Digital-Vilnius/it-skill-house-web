import React, { FC } from 'react';
import { useContractorDelete } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorDeleteConfirmation as ControlledContractorDeleteConfirmation } from '../components';
import { useNavigate } from 'react-router-dom';
import { updateLastUpdated } from '../slice';
import { useAppDispatch } from 'core/store';

export interface ContractorDeleteConfirmationProps {
  id: number;
}

const ContractorDeleteConfirmation: FC<ContractorDeleteConfirmationProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { deleteContractor } = useContractorDelete();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    await deleteContractor(id);
    navigate('/admin/contractors');
    dispatch(updateLastUpdated());
    hideModal();
  };

  return <ControlledContractorDeleteConfirmation onClose={hideModal} onSubmit={handleOnSubmit} />;
};

export default ContractorDeleteConfirmation;
