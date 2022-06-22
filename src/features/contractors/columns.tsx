import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { Form, OverlayTrigger, Popover } from 'react-bootstrap';
import React from 'react';
import { ContractorKeys } from './constants';
import { CountryUtils, CurrencyUtils, DateUtils, EventUtils } from 'utils';

export const contractorColumns: Column<Contractor>[] = [
  { id: ContractorKeys.codaId, label: 'Coda id', sortKey: `contractor.${ContractorKeys.codaId}` },
  { id: ContractorKeys.phone, label: 'Phone' },
  {
    id: ContractorKeys.id,
    label: 'Id',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.id}`,
  },
  {
    id: ContractorKeys.cinodeId,
    label: 'Cinode id',
    sortKey: `contractor.${ContractorKeys.cinodeId}`,
  },
  {
    id: ContractorKeys.fullName,
    label: 'Full name',
    Cell: (cell) => `${cell.firstName} ${cell.lastName}`,
    sortKey: ContractorKeys.fullName,
  },
  {
    id: ContractorKeys.firstName,
    label: 'First name',
    sortKey: `contractor.${ContractorKeys.firstName}`,
  },
  {
    id: ContractorKeys.lastName,
    label: 'Last name',
    sortKey: `contractor.${ContractorKeys.lastName}`,
  },
  {
    id: ContractorKeys.email,
    label: 'Email',
    sticky: true,
    sortKey: `contractor.${ContractorKeys.email}`,
  },
  {
    id: ContractorKeys.isRemote,
    label: 'Remote',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.isRemote}`,
    Cell: (cell) => (
      <Form.Check
        className='d-flex align-items-center justify-content-center'
        readOnly
        checked={cell.isRemote}
        type='checkbox'
      />
    ),
  },
  {
    id: ContractorKeys.isPublic,
    label: 'Public',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.isPublic}`,
    Cell: (cell) => (
      <Form.Check
        className='d-flex align-items-center justify-content-center'
        readOnly
        checked={cell.isPublic}
        type='checkbox'
      />
    ),
  },
  {
    id: ContractorKeys.isAvailable,
    label: 'Available',
    className: 'text-center',
    sortKey: ContractorKeys.isAvailable,
    Cell: (cell) => (
      <Form.Check
        className='d-flex align-items-center justify-content-center'
        readOnly
        checked={cell.isAvailable}
        type='checkbox'
      />
    ),
  },
  {
    id: ContractorKeys.hasContract,
    label: 'Has contract',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.hasContract}`,
    Cell: (cell) => (
      <Form.Check
        className='d-flex align-items-center justify-content-center'
        readOnly
        checked={cell.hasContract}
        type='checkbox'
      />
    ),
  },
  {
    id: ContractorKeys.isOnSite,
    label: 'On site',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.isOnSite}`,
    Cell: (cell) => (
      <Form.Check
        className='d-flex align-items-center justify-content-center'
        readOnly
        checked={cell.isOnSite}
        type='checkbox'
      />
    ),
  },
  {
    id: ContractorKeys.country,
    label: 'Country',
    sortKey: ContractorKeys.country,
    Cell: (cell) => CountryUtils.getCountryName(cell.countryCode),
  },
  {
    id: ContractorKeys.rate,
    label: 'Rate',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.rate}`,
    Cell: (cell) =>
      cell.rate && cell.currency
        ? `${cell.rate.toFixed(2)} ${CurrencyUtils.getCurrencySymbol(cell.currency)}`
        : undefined,
  },
  {
    id: ContractorKeys.profession,
    label: 'Profession',
    Cell: (cell) => (cell.profession ? cell.profession.name : undefined),
    sortKey: ContractorKeys.profession,
  },
  {
    id: ContractorKeys.recruiter,
    label: 'Recruiter',
    sortKey: ContractorKeys.recruiter,
    Cell: (cell) => `${cell.recruiter.firstName} ${cell.recruiter.lastName}`,
  },
  {
    id: ContractorKeys.mainTechnologies,
    label: 'Main technologies',
    Cell: (cell) => cell.mainTechnologies.map((technology) => technology.name).join(', '),
  },
  {
    id: ContractorKeys.mailed,
    label: 'Mailed',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.mailed}`,
    Cell: (cell) => {
      return cell.lastEmail ? DateUtils.formatDateStringStrict(cell.lastEmail) : undefined;
    },
  },
  {
    id: ContractorKeys.nearestEvent,
    label: 'Nearest event',
    className: 'text-center',
    sortKey: ContractorKeys.nearestEvent,
    Cell: (cell) => cell.nearestEvent?.date,
  },
  {
    id: ContractorKeys.technologies,
    label: 'Technologies',
    Cell: (cell) => cell.technologies.map((technology) => technology.name).join(', '),
  },
  {
    id: ContractorKeys.tags,
    label: 'Tags',
    Cell: (cell) => cell.tags.map((tag) => tag.name).join(', '),
  },
  {
    id: ContractorKeys.lastNote,
    label: 'Last note',
    className: 'text-center',
    sortKey: ContractorKeys.lastNote,
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
  },
  {
    id: ContractorKeys.availableFrom,
    label: 'Available from',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.availableFrom}`,
  },
  {
    id: ContractorKeys.experienceSince,
    label: 'Experience since',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.experienceSince}`,
  },
  {
    id: ContractorKeys.linkedInUrl,
    label: 'LinkedIn',
    className: 'text-center',
    Cell: (cell) =>
      cell.linkedInUrl ? (
        <a onClick={EventUtils.stopPropagation} href={cell.linkedInUrl} target='_blank'>
          LinkedIn
        </a>
      ) : undefined,
  },
  {
    id: ContractorKeys.updated,
    label: 'Updated',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.updated}`,
  },
  {
    id: ContractorKeys.created,
    label: 'Created',
    className: 'text-center',
    sortKey: `contractor.${ContractorKeys.created}`,
    sticky: true,
  },
];

if (Object.keys(ContractorKeys).length !== contractorColumns.length) {
  throw new Error('Contractor columns missing');
}
