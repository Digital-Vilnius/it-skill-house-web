import React, { FC } from 'react';
import { Event } from '../types';
import { Button, Card, ListGroup } from 'react-bootstrap';
import EventsListItem from './EventsListItem';

interface Props {
  events: Event[];
  onAddClick: () => void;
}

const EventsList: FC<Props> = (props) => {
  const { events, onAddClick } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Events</h4>
        <Button onClick={onAddClick} size='sm' className='ms-2'>
          Add event
        </Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush my-n3'>
          {events.map((event) => (
            <EventsListItem event={event} key={event.id} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default EventsList;
