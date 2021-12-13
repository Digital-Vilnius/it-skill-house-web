import { ContractorsFilter } from './types';
import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';

export const initialFilter: ContractorsFilter = {
  keyword: null,

  isRemote: null,
  isPublic: null,
  isAvailable: null,
  hasContract: null,
  isOnSite: null,

  mainTechnologiesIds: [],
  professionsIds: [],
  recruitersIds: [],
  technologiesIds: [],
  tagsIds: [],

  rateFrom: null,
  rateTo: null,

  experienceFrom: null,
  experienceTo: null,

  availableFrom: null,
  availableTo: null,
};

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

  location = 'location',
  rate = 'rate',

  profession = 'profession',
  recruiter = 'recruiter',
  mainTechnology = 'mainTechnology',

  technologies = 'technologies',
  tags = 'tags',

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
  ContractKeys.profession,
  ContractKeys.mainTechnology,
  ContractKeys.technologies,
  ContractKeys.tags,
  ContractKeys.experienceSince,
  ContractKeys.availableFrom,
  ContractKeys.location,
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
  ContractKeys.phone,
  ContractKeys.recruiter,
  ContractKeys.mainTechnology,
  ContractKeys.tags,
  ContractKeys.experienceSince,
  ContractKeys.availableFrom,
  ContractKeys.location,
  ContractKeys.isOnSite,
  ContractKeys.isRemote,
  ContractKeys.isPublic,
  ContractKeys.isAvailable,
  ContractKeys.hasContract,
  ContractKeys.rate,
  ContractKeys.created,
];

export const initialPaging: Paging = { take: 15, skip: 0 };
export const initialSort: Sort = { sortBy: ContractKeys.created, sortDirection: SortDirections.desc };
