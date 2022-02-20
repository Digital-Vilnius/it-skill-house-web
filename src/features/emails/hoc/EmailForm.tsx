import React, { FC } from 'react';
import { useEmailForm } from '../hooks';
import { EmailForm as ControlledEmailForm } from '../components';
import { useAppSelector } from 'core/store';
import { useModal } from 'core/modal/hooks';

const EmailForm: FC = () => {
  const { hideModal } = useModal();
  const { selected } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, save } = useEmailForm({
    onSuccess: hideModal,
    contractors: selected,
  });

  return (
    <ControlledEmailForm
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
      contractors={selected}
    />
  );
};

export default EmailForm;
