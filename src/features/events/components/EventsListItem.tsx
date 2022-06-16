import React, { FC } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Event } from '../types';

interface Props {
  event: Event;
}

const EventsListItem: FC<Props> = (props) => {
  const { event } = props;

  return (
    <ListGroup.Item key={event.id}>
      <Row>
        <Col>
          <div className='small mb-3'>
            <strong className='d-block mb-2'>{event.title}</strong>
            <div className='html-content' dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
          <small className='text-muted'>{event.date}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EventsListItem;
