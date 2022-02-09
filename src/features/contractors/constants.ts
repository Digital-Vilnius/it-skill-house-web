import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';

export enum ContractKeys {
  id = 'id',
  codaId = 'codaId',
  cinodeId = 'cinodeId',
  fullName = 'fullName',
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phone = 'phone',
  isRemote = 'isRemote',
  isPublic = 'isPublic',
  isAvailable = 'isAvailable',
  hasContract = 'hasContract',
  isOnSite = 'isOnSite',
  country = 'country',
  rate = 'rate',
  mailed = 'mailed',
  nearestEvent = 'nearestEvent',
  profession = 'profession',
  recruiter = 'recruiter',
  mainTechnologies = 'mainTechnologies',
  technologies = 'technologies',
  tags = 'tags',
  notes = 'notes',
  availableFrom = 'availableFrom',
  experienceSince = 'experienceSince',
  linkedInUrl = 'linkedInUrl',
  updated = 'updated',
  created = 'created',
}

export const initialColumnsOrder: string[] = [
  ContractKeys.id,
  ContractKeys.codaId,
  ContractKeys.cinodeId,
  ContractKeys.fullName,
  ContractKeys.firstName,
  ContractKeys.lastName,
  ContractKeys.email,
  ContractKeys.phone,
  ContractKeys.recruiter,
  ContractKeys.mailed,
  ContractKeys.nearestEvent,
  ContractKeys.profession,
  ContractKeys.mainTechnologies,
  ContractKeys.technologies,
  ContractKeys.tags,
  ContractKeys.notes,
  ContractKeys.experienceSince,
  ContractKeys.availableFrom,
  ContractKeys.country,
  ContractKeys.isRemote,
  ContractKeys.isPublic,
  ContractKeys.isAvailable,
  ContractKeys.isOnSite,
  ContractKeys.hasContract,
  ContractKeys.rate,
  ContractKeys.linkedInUrl,
  ContractKeys.updated,
  ContractKeys.created,
];

console.log(Object.keys(ContractKeys).length, initialColumnsOrder.length);

if (Object.keys(ContractKeys).length !== initialColumnsOrder.length) {
  throw new Error('Initial contractor columns missing');
}

export const initialColumnsIds: string[] = [
  ContractKeys.id,
  ContractKeys.fullName,
  ContractKeys.email,
  ContractKeys.recruiter,
  ContractKeys.mainTechnologies,
  ContractKeys.mailed,
  ContractKeys.notes,
  ContractKeys.experienceSince,
  ContractKeys.availableFrom,
  ContractKeys.country,
  ContractKeys.isAvailable,
  ContractKeys.rate,
  ContractKeys.created,
];

export const initialPaging: Paging = { take: 15, skip: 0 };
export const initialSort: Sort = { sortBy: ContractKeys.created, sortDirection: SortDirections.desc };
