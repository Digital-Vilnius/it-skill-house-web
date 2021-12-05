import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Form } from 'react-bootstrap';
import React from 'react';

export const contractorColumns: Column<Contractor>[] = [
  { id: 'id', label: 'Id', className: 'text-center' },
  { id: 'email', label: 'Email', sortable: true, sticky: true },
  { id: 'phone', label: 'Phone' },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'location', label: 'Location', sortable: true },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true },
  { id: 'availableFrom', label: 'Available from', className: 'text-center', sortable: true },
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
];
