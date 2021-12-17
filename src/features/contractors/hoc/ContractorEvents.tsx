import { FC } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useContractorEvents } from '../hooks';

interface Props {
  contractorId: number;
}

const ContractorEvents: FC<Props> = (props) => {
  const { contractorId } = props;
  const { events } = useContractorEvents({ contractorId });

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Events</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush list-group-activity my-n3'>
          {events.map((event) => (
            <ListGroup.Item key={event.id}>
              <Row>
                <Col xs='auto'>
                  <small className='text-muted date'>{event.date}</small>
                </Col>
                <Col className='ms-n2'>
                  <h3 className='mb-4'>{event.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: event.content }}
                    className='small html-content mb-2'
                  />
                  <small className='text-muted'>{event.location}</small>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ContractorEvents;
