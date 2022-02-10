import React, { FC } from 'react';
import { ContractorsActions as ControlledContractorsActions } from '../components';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setSelectedContractors } from '../slice';
import { useModal } from 'core/modal/hooks';
import { EmailForm } from 'features/emails/hoc';

const ContractorsActions: FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useModal();

  const { selected } = useAppSelector((state) => state.contractors);

  const handleClose = () => {
    dispatch(setSelectedContractors([]));
  };

  const openSendEmailForm = () => {
    showModal(EmailForm, { title: 'Send email', size: 'lg' });
  };

  return (
    <ControlledContractorsActions
      selectedCount={selected.length}
      onClose={handleClose}
      onSendEmail={openSendEmailForm}
    />
  );
};

export default ContractorsActions;
