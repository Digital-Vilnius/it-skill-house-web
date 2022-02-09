import { FC } from 'react';
import { Event } from '../types';
import { Card, ListGroup } from 'react-bootstrap';
import EventsListItem from './EventsListItem';

interface Props {
  events: Event[];
}

const EventsList: FC<Props> = (props) => {
  const { events } = props;

  return (
    <Card>
      <Card.Header>
        <h4 className='card-header-title'>Events</h4>
      </Card.Header>
      <Card.Body>
        <ListGroup className='list-group-flush list-group-activity my-n3'>
          {events.map((event) => (
            <EventsListItem event={event} key={event.id} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default EventsList;
