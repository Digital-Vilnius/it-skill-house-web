import React, { FC } from 'react';
import { useContractorForm } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorForm as ControlledContractorForm } from '../components';

export interface ContractorFormProps {
  id?: number;
}

const ContractorForm: FC<ContractorFormProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();

  const { control, handleSubmit, save } = useContractorForm({
    onSuccess: hideModal,
    onError: console.log,
    id,
  });

  return (
    <ControlledContractorForm
      isEdit={!!id}
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
    />
  );
};

export default ContractorForm;
