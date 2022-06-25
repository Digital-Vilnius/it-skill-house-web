import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';
import { SelectOption } from 'components/Select';
import { Comparisons, ContractorFilterKeys } from 'api/clients/contractors/types';

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

export const contractorFilterKeysOptions: SelectOption[] = [
  { label: 'Keyword', value: ContractorFilterKeys.keyword },
  { label: 'Profession', value: ContractorFilterKeys.profession },
  { label: 'Recruiter', value: ContractorFilterKeys.recruiter },
  { label: 'Tags', value: ContractorFilterKeys.tags },
  { label: 'Available from', value: ContractorFilterKeys.availableFrom },
  { label: 'Experience since', value: ContractorFilterKeys.experienceSince },
  { label: 'Rate', value: ContractorFilterKeys.rate },
  { label: 'Country', value: ContractorFilterKeys.country },
  { label: 'Main technologies', value: ContractorFilterKeys.mainTechnologies },
  { label: 'Technologies', value: ContractorFilterKeys.technologies },
  { label: 'Remote', value: ContractorFilterKeys.isRemote },
  { label: 'On site', value: ContractorFilterKeys.isOnSite },
  { label: 'Is available', value: ContractorFilterKeys.isAvailable },
  { label: 'Has contract', value: ContractorFilterKeys.hasContract },
  { label: 'Public', value: ContractorFilterKeys.isPublic },
];

export const comparisonOptions: SelectOption[] = [
  { label: 'Equal', value: Comparisons.equal },
  { label: 'Greater or equal', value: Comparisons.greaterOrEqual },
  { label: 'Greater', value: Comparisons.greater },
  { label: 'Less or equal', value: Comparisons.lessOrEqual },
  { label: 'Less', value: Comparisons.less },
  { label: 'Is null', value: Comparisons.isNull },
  { label: 'In', value: Comparisons.in },
  { label: 'Not in', value: Comparisons.notIn },
];
