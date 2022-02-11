import React, { FC } from 'react';
import { useContractorForm, useContractorsRefetch } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorForm as ControlledContractorForm } from '../components';

export interface ContractorFormProps {
  id?: number;
}

const ContractorForm: FC<ContractorFormProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const { refetch } = useContractorsRefetch();

  const onSuccess = async () => {
    await refetch();
    hideModal();
  };

  const { handleSubmit, save, control } = useContractorForm({ onSuccess, id });

  return (
    <ControlledContractorForm
      isEdit={!!id}
      onClose={hideModal}
      control={control}
      onSubmit={handleSubmit(save)}
    />
  );
};

export default ContractorForm;
