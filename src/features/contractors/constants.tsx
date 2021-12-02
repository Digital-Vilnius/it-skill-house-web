import { Column } from 'components/DataTable/types';
import { Contractor } from './types';
import { Form } from 'react-bootstrap';
import React from 'react';

export const contractorColumns: Column<Contractor>[] = [
  { id: 'id', label: 'Id', className: 'text-center', sortable: true, order: 1 },
  { id: 'email', label: 'Email', sortable: true, sticky: true, order: 2 },
  { id: 'firstName', label: 'First name', sortable: true, order: 3 },
  { id: 'lastName', label: 'Last name', sortable: true, order: 4 },
  { id: 'location', label: 'Location', sortable: true, order: 7 },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true, order: 10 },
  {
    id: 'created',
    label: 'Created',
    className: 'text-center',
    sortable: true,
    sticky: true,
    order: 11,
  },
  {
    id: 'recruiter',
    label: 'Recruiter',
    sortable: true,
    order: 6,
    Cell: (cell) => `${cell.recruiter.firstName} ${cell.recruiter.lastName}`,
  },
  {
    id: 'fullName',
    label: 'Full name',
    Cell: (cell) => `${cell.firstName} ${cell.lastName}`,
    sortable: true,
    order: 5,
  },
  {
    id: 'isRemote',
    label: 'Remote',
    className: 'text-center',
    sortable: true,
    order: 9,
    Cell: (cell) => <Form.Check readOnly checked={cell.isRemote} type='checkbox' />,
  },
  {
    id: 'rate',
    label: 'Rate',
    className: 'text-center',
    Cell: (cell) => `${cell.rate.toFixed(2)} €`,
    sortable: true,
    order: 8,
  },
];

export const getAllColumns = () => {
  return contractorColumns.sort((column, nextColumn) => column.order - nextColumn.order);
};

export const getStickyColumns = () => {
  return getAllColumns().filter((column) => column.sticky);
};

export const getVisibleColumns = (columnsIds: string[]) => {
  return getAllColumns().filter((column) => columnsIds.includes(column.id) || column.sticky);
};
