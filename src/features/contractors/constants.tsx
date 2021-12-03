import { Column } from 'components/DataTable/types';
import { Contractor } from './types';
import { Form } from 'react-bootstrap';
import React from 'react';
import sortBy from 'lodash/sortBy';

export const contractorColumns: Column<Contractor>[] = [
  { id: 'id', label: 'Id', className: 'text-center', sortable: true },
  { id: 'email', label: 'Email', sortable: true, sticky: true },
  { id: 'firstName', label: 'First name', sortable: true },
  { id: 'lastName', label: 'Last name', sortable: true },
  { id: 'location', label: 'Location', sortable: true },
  { id: 'updated', label: 'Updated', className: 'text-center', sortable: true },
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
    id: 'rate',
    label: 'Rate',
    className: 'text-center',
    Cell: (cell) => `${cell.rate.toFixed(2)} €`,
    sortable: true,
  },
];

export const getAllColumns = (order: string[]) => {
  const orderedColumns: Column<Contractor>[] = [];

  order.forEach((id) => {
    const nextColumn = contractorColumns.find((column) => column.id === id);
    if (nextColumn) orderedColumns.push(nextColumn);
  });

  return orderedColumns;
};

export const getVisibleColumns = (columns: Column<Contractor>[], columnsIds: string[]) => {
  return columns.filter((column) => columnsIds.includes(column.id) || column.sticky);
};
