import { Paging, Sort } from 'api/types';
import { SortDirections } from '../../api/constants';

export enum ContractorKeys {
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
  lastNote = 'lastNote',
  availableFrom = 'availableFrom',
  experienceSince = 'experienceSince',
  linkedInUrl = 'linkedInUrl',
  updated = 'updated',
  created = 'created',
}

export const initialColumnsOrder: string[] = [
  ContractorKeys.id,
  ContractorKeys.codaId,
  ContractorKeys.cinodeId,
  ContractorKeys.fullName,
  ContractorKeys.firstName,
  ContractorKeys.lastName,
  ContractorKeys.email,
  ContractorKeys.phone,
  ContractorKeys.recruiter,
  ContractorKeys.mailed,
  ContractorKeys.nearestEvent,
  ContractorKeys.profession,
  ContractorKeys.mainTechnologies,
  ContractorKeys.technologies,
  ContractorKeys.tags,
  ContractorKeys.lastNote,
  ContractorKeys.experienceSince,
  ContractorKeys.availableFrom,
  ContractorKeys.country,
  ContractorKeys.isRemote,
  ContractorKeys.isPublic,
  ContractorKeys.isAvailable,
  ContractorKeys.isOnSite,
  ContractorKeys.hasContract,
  ContractorKeys.rate,
  ContractorKeys.linkedInUrl,
  ContractorKeys.updated,
  ContractorKeys.created,
];

if (Object.keys(ContractorKeys).length !== initialColumnsOrder.length) {
  throw new Error('Initial contractor columns missing');
}

export const initialColumnsIds: string[] = [
  ContractorKeys.id,
  ContractorKeys.fullName,
  ContractorKeys.email,
  ContractorKeys.recruiter,
  ContractorKeys.mainTechnologies,
  ContractorKeys.mailed,
  ContractorKeys.lastNote,
  ContractorKeys.experienceSince,
  ContractorKeys.availableFrom,
  ContractorKeys.country,
  ContractorKeys.isAvailable,
  ContractorKeys.rate,
  ContractorKeys.created,
];

export const initialPaging: Paging = { limit: 20, offset: 0 };
export const initialSort: Sort = {
  sortBy: `contractor.${ContractorKeys.created}`,
  sortDirection: SortDirections.desc,
};
