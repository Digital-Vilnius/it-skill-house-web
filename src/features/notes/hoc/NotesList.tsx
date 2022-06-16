import React, { FC } from 'react';
import { useNotes } from '../hooks';
import { NotesList as ControlledNotesList } from '../components';
import { NotesFilter } from 'api/clients/notes/types';
import { useModal } from 'core/modal/hooks';
import NoteForm, { NoteFormProps } from './NoteForm';

interface Props {
  filter: NotesFilter;
  className?: string;
}

const NotesList: FC<Props> = (props) => {
  const { filter, className } = props;
  const { notes } = useNotes({ filter });
  const { showModal } = useModal();

  const openAddNoteForm = () => {
    showModal<NoteFormProps>(
      NoteForm,
      { title: 'Add note', size: 'lg' },
      { contractorId: filter.contractorId }
    );
  };

  return <ControlledNotesList className={className} onAddClick={openAddNoteForm} notes={notes} />;
};

export default NotesList;
