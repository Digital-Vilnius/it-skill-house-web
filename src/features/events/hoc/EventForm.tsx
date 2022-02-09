import React, { FC } from 'react';
import { useEventForm } from '../hooks';
import { EventForm as ControlledEventForm } from '../components';

interface Props {
  onClose: () => void;
  visible: boolean;
  contractorId: number;
  id?: number;
}

const EventForm: FC<Props> = (props) => {
  const { onClose, visible, id, contractorId } = props;
  const { control, handleSubmit, save } = useEventForm({ onSuccess: onClose, id, contractorId });

  return (
    <ControlledEventForm
      control={control}
      onClose={onClose}
      visible={visible}
      onSubmit={handleSubmit(save)}
    />
  );
};

export default EventForm;
