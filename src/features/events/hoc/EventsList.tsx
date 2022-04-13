import React, { FC } from 'react';
import { useEvents } from '../hooks';
import { EventsList as ControlledEventsList } from '../components';
import { EventsFilter } from 'api/clients/events/types';
import { useModal } from 'core/modal/hooks';
import EventForm from './EventForm';

interface Props {
  filter: EventsFilter;
}

const EventsList: FC<Props> = (props) => {
  const { filter } = props;
  const { events } = useEvents({ filter });
  const { showModal } = useModal();

  const openAddEventForm = () => {
    showModal(EventForm, { title: 'Add event', size: 'lg' }, { contractorId: filter.contractorId });
  };

  return <ControlledEventsList onAddClick={openAddEventForm} events={events} />;
};

export default EventsList;
