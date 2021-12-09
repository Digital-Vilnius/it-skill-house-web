import {
  Contractor as ApiContractor,
  ContractorsFilter as ApiContractorFilter,
} from 'api/clients/contractors/types';
import { Contractor, ContractorsFilter } from './types';
import { mapRecruiter } from 'features/recruiters/map';
import { mapTechnology } from 'features/technologies/map';
import { DateUtils } from 'utils';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  recruiter: mapRecruiter(contractor.recruiter),
  availableFrom: DateUtils.formatDateStringStrict(contractor.availableFrom),
  experienceSince: DateUtils.formatDateStringStrict(contractor.experienceSince),
  technologies: contractor.technologies.map(mapTechnology),
});

export const mapContractorFilter = (filter: ContractorsFilter): ApiContractorFilter => ({
  availableFrom: filter.availableFrom ?? undefined,
  availableTo: filter.availableTo ?? undefined,
  isRemote: filter.isRemote ?? undefined,
  isPublic: filter.isPublic ?? undefined,
  isAvailable: filter.isAvailable ?? undefined,
  rateTo: filter.rateTo ?? undefined,
  rateFrom: filter.rateFrom ?? undefined,
  keyword: filter.keyword ?? undefined,
  recruitersIds: filter.recruitersIds ?? undefined,
  technologiesIds: filter.technologiesIds ?? undefined,
  tagsIds: filter.tagsIds ?? undefined,
  experienceFrom: filter.experienceFrom ?? undefined,
  experienceTo: filter.experienceTo ?? undefined,
});
