import React, { FC } from 'react';
import { useEvents } from '../hooks';
import { EventsList as ControlledEventsList } from '../components';
import { EventsFilter } from 'api/clients/events/types';

interface Props {
  filter: EventsFilter;
}

const EventsList: FC<Props> = (props) => {
  const { filter } = props;
  const { events } = useEvents({ filter });

  return <ControlledEventsList events={events} />;
};

export default EventsList;
