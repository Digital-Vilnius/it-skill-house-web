import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Badge, Form } from 'react-bootstrap';
import React from 'react';
import { ContractKeys } from './constants';
import { CountryUtils, CurrencyUtils, DateUtils } from '../../utils';

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
  {
    id: ContractKeys.country,
    label: 'Country',
    sortable: true,
    Cell: (cell) => CountryUtils.getCountryName(cell.countryCode),
  },
  {
    id: ContractKeys.rate,
    label: 'Rate',
    className: 'text-center',
    Cell: (cell) =>
      cell.rate && cell.currency
        ? `${cell.rate.toFixed(2)} ${CurrencyUtils.getCurrencySymbol(cell.currency)}`
        : undefined,
    sortable: true,
  },
  {
    id: ContractKeys.profession,
    label: 'Profession',
    Cell: (cell) => (cell.profession ? cell.profession.name : undefined),
    sortable: true,
  },
  {
    id: ContractKeys.recruiter,
    label: 'Recruiter',
    sortable: true,
    Cell: (cell) => `${cell.recruiter.firstName} ${cell.recruiter.lastName}`,
  },
  {
    id: ContractKeys.mainTechnologies,
    label: 'Main technologies',
    Cell: (cell) => (
      <div className='technologies'>
        {cell.mainTechnologies.map((technology) => (
          <Badge className='me-1' key={technology.id}>
            {technology.name}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    id: ContractKeys.mailed,
    label: 'Mailed',
    className: 'text-center',
    Cell: (cell) => {
      return cell.lastEmail ? DateUtils.formatDateStringStrict(cell.lastEmail.created) : undefined;
    },
    sortable: true,
  },
  {
    id: ContractKeys.nearestEvent,
    label: 'Nearest event',
    className: 'text-center',
    Cell: (cell) => cell.nearestEvent?.date,
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
  {
    id: ContractKeys.notes,
    label: 'Notes',
    Cell: (cell) => (
      <div className='notes'>
        {cell.notes.map((note) => (
          <Badge bg='light' className='me-1' key={note.id}>
            {DateUtils.formatDateStringStrict(note.created)}
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
