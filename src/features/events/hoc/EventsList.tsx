import React, { FC } from 'react';
import { useEvents } from '../hooks';
import { EventsList as ControlledEventsList } from '../components';
import { EventsFilter } from 'api/clients/events/types';
import { useModal } from 'core/modal/hooks';
import EventForm from './EventForm';

interface Props {
  filter: EventsFilter;
  className?: string;
}

const EventsList: FC<Props> = (props) => {
  const { filter, className } = props;
  const { events } = useEvents({ filter });
  const { showModal } = useModal();

  const openAddEventForm = () => {
    showModal(EventForm, { title: 'Add event', size: 'lg' }, { contractorId: filter.contractorId });
  };

  return <ControlledEventsList className={className} onAddClick={openAddEventForm} events={events} />;
};

export default EventsList;
