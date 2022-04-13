import React, { FC } from 'react';
import { useEmailForm } from '../hooks';
import { EmailForm as ControlledEmailForm } from '../components';
import { useAppSelector } from 'core/store';
import { useModal } from 'core/modal/hooks';
import { Contractor } from 'features/contractors/types';

interface Props {
  contractors?: Contractor[];
}

const EmailForm: FC<Props> = (props) => {
  const { contractors = [] } = props;
  const { hideModal } = useModal();
  const { selected } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, save } = useEmailForm({
    onSuccess: hideModal,
    contractors: [...selected, ...contractors],
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
