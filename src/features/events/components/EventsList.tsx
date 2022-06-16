import React, { FC } from 'react';
import { Event } from '../types';
import { Button, Table } from 'react-bootstrap';
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
          <Button onClick={onAddClick} className='button button-primary'>
            <Filter />
            Add event
          </Button>
        </div>
      </div>
      <Table bordered className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date</th>
            <th>Created by</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.content}</td>
              <td>{event.date}</td>
              <td>{event.title}</td>
              <td>{event.created}</td>
              <td>{event.created}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EventsList;
