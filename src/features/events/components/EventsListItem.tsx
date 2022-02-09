import React, { FC } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Event } from '../types';

interface Props {
  event: Event;
}

const EventsListItem: FC<Props> = (props) => {
  const { event } = props;

  return (
    <ListGroup.Item>
      <Row>
        <Col xs='auto'>
          <small className='text-muted date'>{event.date}</small>
        </Col>
        <Col className='ms-n2'>
          <h3 className='mb-4'>{event.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: event.content }} className='small html-content mb-2' />
          <small className='text-muted'>{event.location}</small>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EventsListItem;
