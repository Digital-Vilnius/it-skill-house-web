import React, { FC } from 'react';
import { useEmailForm } from '../hooks';
import { EmailForm as ControlledEmailForm } from '../components';
import { useModal } from 'core/modal/hooks';
import { Contractor } from 'features/contractors/types';

interface Props {
  contractors?: Contractor[];
}

const EmailForm: FC<Props> = (props) => {
  const { contractors = [] } = props;
  const { hideModal } = useModal();

  const { control, handleSubmit, save } = useEmailForm({
    onSuccess: hideModal,
    contractors,
  });

  return (
    <ControlledEmailForm
      control={control}
      onClose={hideModal}
      onSubmit={handleSubmit(save)}
      contractors={contractors}
    />
  );
};

export default EmailForm;
