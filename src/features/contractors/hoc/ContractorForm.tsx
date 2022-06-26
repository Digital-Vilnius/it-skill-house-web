import React, { FC } from 'react';
import { useContractorForm } from '../hooks';
import { useModal } from 'core/modal/hooks';
import { ContractorForm as ControlledContractorForm } from '../components';
import { useAppDispatch } from 'core/store';
import { updateLastUpdated } from '../slice';

export interface ContractorFormProps {
  id?: number;
}

const ContractorForm: FC<ContractorFormProps> = (props) => {
  const { id } = props;
  const { hideModal } = useModal();
  const dispatch = useAppDispatch();

  const onSuccess = async () => {
    dispatch(updateLastUpdated());
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
