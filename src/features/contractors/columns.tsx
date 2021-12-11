import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Badge, Form } from 'react-bootstrap';
import React from 'react';
import { ContractKeys } from './constants';

export const contractorColumns: Column<Contractor>[] = [
  { id: ContractKeys.id, label: 'Id', className: 'text-center', sortable: true },
  { id: ContractKeys.codaId, label: 'Coda id', sortable: true },
  { id: ContractKeys.cinodeId, label: 'Cinode id', sortable: true },
  {
    id: ContractKeys.fullName,
    label: 'Full name',
    Cell: (cell) => `${cell.firstName} ${cell.lastName}`,
    sortable: true,
  },
  { id: ContractKeys.firstName, label: 'First name', sortable: true },
  { id: ContractKeys.lastName, label: 'Last name', sortable: true },
  { id: ContractKeys.email, label: 'Email', sortable: true, sticky: true },
  { id: ContractKeys.phone, label: 'Phone' },
  {
    id: ContractKeys.isRemote,
    label: 'Remote',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isRemote} type='checkbox' />,
  },
  {
    id: ContractKeys.isPublic,
    label: 'Public',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isPublic} type='checkbox' />,
  },
  {
    id: ContractKeys.isAvailable,
    label: 'Available',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isAvailable} type='checkbox' />,
  },
  {
    id: ContractKeys.hasContract,
    label: 'Has contract',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.hasContract} type='checkbox' />,
  },
  {
    id: ContractKeys.isOnSite,
    label: 'On site',
    className: 'text-center',
    sortable: true,
    Cell: (cell) => <Form.Check readOnly checked={cell.isOnSite} type='checkbox' />,
  },
  { id: ContractKeys.location, label: 'Location', sortable: true },
  {
    id: ContractKeys.rate,
    label: 'Rate',
    className: 'text-center',
    Cell: (cell) => `${cell.rate.toFixed(2)} €`,
    sortable: true,
  },
  {
    id: ContractKeys.profession,
    label: 'Profession',
    Cell: (cell) => <Badge>{cell.profession.name}</Badge>,
    sortable: true,
  },
  {
    id: ContractKeys.recruiter,
    label: 'Recruiter',
    sortable: true,
    Cell: (cell) => `${cell.recruiter.firstName} ${cell.recruiter.lastName}`,
  },
  {
    id: ContractKeys.mainTechnology,
    label: 'Main technology',
    Cell: (cell) => <Badge>{cell.mainTechnology.name}</Badge>,
    sortable: true,
  },
  {
    id: ContractKeys.technologies,
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
    id: ContractKeys.tags,
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
  { id: ContractKeys.availableFrom, label: 'Available from', className: 'text-center', sortable: true },
  {
    id: ContractKeys.experienceSince,
    label: 'Experience since',
    className: 'text-center',
    sortable: true,
  },
  { id: ContractKeys.linkedInUrl, label: 'LinkedIn' },
  { id: ContractKeys.updated, label: 'Updated', className: 'text-center', sortable: true },
  {
    id: ContractKeys.created,
    label: 'Created',
    className: 'text-center',
    sortable: true,
    sticky: true,
  },
];

if (Object.keys(ContractKeys).length !== contractorColumns.length) {
  throw new Error('Contractor columns missing');
}