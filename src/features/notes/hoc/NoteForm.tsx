import React, { FC } from 'react';
import { useNoteForm } from '../hooks';
import { NoteForm as ControlledNoteForm } from '../components';
import { useModal } from 'core/modal/hooks';

export interface NoteFormProps {
  id?: number;
  contractorId: number;
}

const NoteForm: FC<NoteFormProps> = (props) => {
  const { id, contractorId } = props;
  const { hideModal } = useModal();

  const { control, handleSubmit, save } = useNoteForm({ onSuccess: hideModal, id, contractorId });

  return <ControlledNoteForm control={control} onClose={hideModal} onSubmit={handleSubmit(save)} />;
};

export default NoteForm;
