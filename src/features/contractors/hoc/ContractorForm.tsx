import React, { FC } from 'react';
import { useContractorForm } from '../hooks';
import { ContractorForm as ControlledContractorForm } from '../components';
import { useModal } from 'core/modal/hooks';

export interface ContractorFormProps {
  id?: number;
}

const ContractorForm: FC<ContractorFormProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { control, handleSubmit, save } = useContractorForm({ onSuccess: hideModal, id });

  return (
    <ControlledContractorForm
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
      editMode={false}
    />
  );
};

export default ContractorForm;
