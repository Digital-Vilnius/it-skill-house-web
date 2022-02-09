import React, { FC } from 'react';
import { useNoteForm } from '../hooks';
import { NoteForm as ControlledNoteForm } from '../components';

interface Props {
  onClose: () => void;
  visible: boolean;
  contractorId: number;
  id?: number;
}

const NoteForm: FC<Props> = (props) => {
  const { onClose, visible, id, contractorId } = props;
  const { control, handleSubmit, save } = useNoteForm({ onSuccess: onClose, id, contractorId });

  return (
    <ControlledNoteForm
      control={control}
      onClose={onClose}
      visible={visible}
      onSubmit={handleSubmit(save)}
    />
  );
};

export default NoteForm;
