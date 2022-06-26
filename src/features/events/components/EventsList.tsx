import React, { FC } from 'react';
import { Event } from '../types';
import { Filter } from 'react-feather';

interface Props {
  events: Event[];
  onAddClick: () => void;
  className?: string;
}

const EventsList: FC<Props> = (props) => {
  const { events, onAddClick, className } = props;

  return (
    <div className={className}>
      <div className='page-header'>
        <h1 className='page-title'>Events</h1>
        <div className='page-actions'>
          <button onClick={onAddClick} className='button button-primary'>
            <Filter />
            Add event
          </button>
        </div>
      </div>
      {events.map((event) => (
        <div key={event.id} className='event'>
          <h4 className='event-title'>{event.title}</h4>
          <p className='event-content' dangerouslySetInnerHTML={{ __html: event.content }} />
          <div className='event-footer'>
            <span className='event-footer-value'>{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
