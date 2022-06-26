import React, { FC } from 'react';
import { Note } from '../types';
import { Filter } from 'react-feather';
import { DateUtils } from 'utils';

interface Props {
  notes: Note[];
  onAddClick: () => void;
  className?: string;
}

const NotesList: FC<Props> = (props) => {
  const { notes, onAddClick, className } = props;

  return (
    <div className={className}>
      <div className='page-header'>
        <h1 className='page-title'>Notes</h1>
        <div className='page-actions'>
          <button onClick={onAddClick} className='button button-primary'>
            <Filter />
            Add note
          </button>
        </div>
      </div>
      {notes.map((note) => (
        <div key={note.id} className='note'>
          <h4 className='note-title'>{`${note.createdBy.firstName} ${note.createdBy.lastName}`}</h4>
          <p className='note-content' dangerouslySetInnerHTML={{ __html: note.content }} />
          <div className='note-footer'>
            <span className='note-footer-value'>{DateUtils.formatDateString(note.created)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
