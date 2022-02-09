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
        <Col xs='auto'>
          <small className='text-muted date'>{note.created}</small>
        </Col>
        <Col className='ms-n2'>
          <p dangerouslySetInnerHTML={{ __html: note.content }} className='small html-content' />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default NotesListItem;
