import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Form, OverlayTrigger, Popover } from 'react-bootstrap';
import React from 'react';
import { ContractKeys } from './constants';
import { CountryUtils, CurrencyUtils, DateUtils, EventUtils } from 'utils';
import { Badge } from 'components';

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
    Cell: (cell) => cell.mainTechnologies.map((technology) => technology.name).join(', '),
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
    Cell: (cell) => cell.technologies.map((technology) => technology.name).join(', '),
  },
  {
    id: ContractKeys.tags,
    label: 'Tags',
    Cell: (cell) => cell.tags.map((tag) => tag.name).join(', '),
  },
  {
    id: ContractKeys.lastNote,
    label: 'Last note',
    className: 'text-center',
    Cell: (cell) => {
      if (!cell.lastNote) return undefined;
      return (
        <div onClick={($event) => $event.stopPropagation()}>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement='bottom'
            overlay={
              <Popover id='popover-basic'>
                <Popover.Header as='h3'>{`${cell.lastNote.createdBy.firstName} ${cell.lastNote.createdBy.lastName}`}</Popover.Header>
                <Popover.Body
                  className='html-content'
                  dangerouslySetInnerHTML={{ __html: cell.lastNote.content }}
                />
              </Popover>
            }
          >
            <span>{DateUtils.formatDateStringStrict(cell.lastNote.created)}</span>
          </OverlayTrigger>
        </div>
      );
    },
    sortable: true,
  },
  { id: ContractKeys.availableFrom, label: 'Available from', className: 'text-center', sortable: true },
  {
    id: ContractKeys.experienceSince,
    label: 'Experience since',
    className: 'text-center',
    sortable: true,
  },
  {
    id: ContractKeys.linkedInUrl,
    label: 'LinkedIn',
    className: 'text-center',
    Cell: (cell) =>
      cell.linkedInUrl ? (
        <a onClick={EventUtils.stopPropagation} href={cell.linkedInUrl} target='_blank'>
          LinkedIn
        </a>
      ) : undefined,
  },
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
