import React, { FC } from 'react';
import { useEventForm } from '../hooks';
import { EventForm as ControlledEventForm } from '../components';
import { useModal } from 'core/modal/hooks';

export interface EventFormProps {
  id?: number;
  contractorId: number;
}

const EventForm: FC<EventFormProps> = (props) => {
  const { id, contractorId } = props;
  const { hideModal } = useModal();
  const { control, handleSubmit, save } = useEventForm({ onSuccess: hideModal, id, contractorId });

  return <ControlledEventForm control={control} onClose={hideModal} onSubmit={handleSubmit(save)} />;
};

export default EventForm;
