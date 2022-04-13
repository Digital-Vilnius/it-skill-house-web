import React, { FC } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Note } from '../types';

interface Props {
  note: Note;
}

const NotesListItem: FC<Props> = (props) => {
  const { note } = props;

  return (
    <ListGroup.Item key={note.id}>
      <Row>
        <Col>
          <div className='small html-content mb-3' dangerouslySetInnerHTML={{ __html: note.content }} />
          <small className='text-muted'>{`${note.createdBy.firstName} ${note.createdBy.lastName}, ${note.created}`}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default NotesListItem;
