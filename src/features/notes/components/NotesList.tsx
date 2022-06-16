import React, { FC } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Note } from '../types';
import { Filter } from 'react-feather';

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
          <Button onClick={onAddClick} className='button button-primary'>
            <Filter />
            Add note
          </Button>
        </div>
      </div>
      <Table bordered className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Content</th>
            <th>Created by</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.content}</td>
              <td>{note.created}</td>
              <td>{note.created}</td>
              <td>{note.created}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NotesList;
