import { FC } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Note } from 'features/notes/types';

interface Props {
  notes: Note[];
}

const ContractorNotes: FC<Props> = (props) => {
  const { notes } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Notes</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush list-group-activity my-n3'>
          {notes.map((note) => (
            <ListGroup.Item key={note.id}>
              <Row>
                <Col xs='auto'>
                  <small className='text-muted date'>{note.date}</small>
                </Col>
                <Col className='ms-n2'>
                  <h3 className='mb-4'>{note.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: note.content }} className='small html-content' />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ContractorNotes;
