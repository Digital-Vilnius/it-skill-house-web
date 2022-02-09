import React, { FC } from 'react';
import { useNotes } from '../hooks';
import { NotesList as ControlledNotesList } from '../components';
import { NotesFilter } from 'api/clients/notes/types';

interface Props {
  filter: NotesFilter;
}

const NotesList: FC<Props> = (props) => {
  const { filter } = props;
  const { notes } = useNotes({ filter });

  return <ControlledNotesList notes={notes} />;
};

export default NotesList;
