import { FC } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import NotesListItem from './NotesListItem';
import { Note } from '../types';

interface Props {
  notes: Note[];
}

const NotesList: FC<Props> = (props) => {
  const { notes } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Notes</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush list-group-activity my-n3'>
          {notes.map((note) => (
            <NotesListItem note={note} key={note.id} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default NotesList;
