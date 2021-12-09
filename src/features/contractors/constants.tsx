import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Badge, Form } from 'react-bootstrap';
import React from 'react';

export const contractorColumns: Column<Contractor>[] = [
  { id: 'id', label: 'Id', className: 'text-center' },
  { id: 'email', label: 'Email', sortable: true, sticky: true },
  { id: 'phone', label: 'Phone' },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'codaId', label: 'Coda id', sortable: true },
  { id: 'cinodeId', label: 'Cinode id', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'location', label: 'Location', sortable: true },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true },
  { id: 'availableFrom', label: 'Available from', className: 'text-center', sortable: true },
  { id: 'experienceSince', label: 'Experience since', className: 'text-center', sortable: true },
  {
    id: 'created',
    label: 'Created',
    className: 'text-center',
    sortable: true,
    sticky: true,
  },
  {
    id: 'recruiter',
    label: 'Recruiter',
    sortable: true,
    Cell: (cell) => `${cell.recruiter.firstName} ${cell.recruiter.lastName}`,
  },
  {
    id: 'fullName',
    label: 'Full name',
    Cell: (cell) => `${cell.firstName} ${cell.lastName}`,
    sortable: true,
  },
  {
    id: 'isRemote',
    label: 'Remote',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isRemote} type='checkbox' />,
  },
  {
    id: 'isPublic',
    label: 'Public',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isPublic} type='checkbox' />,
  },
  {
    id: 'rate',
    label: 'Rate',
    className: 'text-center',
    Cell: (cell) => `${cell.rate.toFixed(2)} €`,
    sortable: true,
  },
  {
    id: 'mainTechnology',
    label: 'Main technology',
    Cell: (cell) => <Badge>{cell.mainTechnology.name}</Badge>,
    sortable: true,
  },
  {
    id: 'technologies',
    label: 'Technologies',
    Cell: (cell) => (
      <div className='technologies'>
        {cell.technologies.map((technology) => (
          <Badge className='me-1' key={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: 'tags',
    label: 'Tags',
    Cell: (cell) => (
      <div className='tags'>
        {cell.tags.map((tag) => (
          <Badge className='me-1' key={tag.id}>
            {tag.name}
          </Badge>
        ))}
      </div>
    ),
  },
];
