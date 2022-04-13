import React, { FC } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import NotesListItem from './NotesListItem';
import { Note } from '../types';

interface Props {
  notes: Note[];
  onAddClick: () => void;
}

const NotesList: FC<Props> = (props) => {
  const { notes, onAddClick } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Notes</h4>
        <Button onClick={onAddClick} size='sm' className='ms-2'>
          Add note
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush my-n3'>
          {notes.map((note) => (
            <NotesListItem note={note} key={note.id} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default NotesList;
