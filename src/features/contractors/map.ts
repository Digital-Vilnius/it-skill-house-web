import {
  Contractor as ApiContractor,
  ContractorsFilter as ApiContractorFilter,
} from 'api/clients/contractors/types';
import { Contractor, ContractorFormData, ContractorsFilter } from './types';
import { mapRecruiter } from 'features/recruiters/map';
import { mapTechnology } from 'features/technologies/map';
import { mapEvent } from 'features/events/map';
import { DateUtils } from 'utils';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  recruiter: mapRecruiter(contractor.recruiter),
  availableFrom: DateUtils.formatDateStringStrict(contractor.availableFrom),
  experienceSince: DateUtils.formatDateStringStrict(contractor.experienceSince),
  technologies: contractor.technologies.map(mapTechnology),
  events: contractor.events.map(mapEvent),
  nearestEvent: contractor.nearestEvent ? mapEvent(contractor.nearestEvent) : null,
});

export const mapContractorFormData = (contractor: Contractor): ContractorFormData => ({
  ...contractor,
  professionId: contractor.profession.id,
  recruiterId: contractor.recruiter.id,
  mainTechnologyId: contractor.mainTechnology.id,
  technologiesIds: contractor.technologies.map((technology) => technology.id),
  tagsIds: contractor.tags.map((tag) => tag.id),
});

export const mapContractorFilter = (filter: ContractorsFilter): ApiContractorFilter => ({
  keyword: filter.keyword ?? undefined,

  isRemote: filter.isRemote ?? undefined,
  isPublic: filter.isPublic ?? undefined,
  isAvailable: filter.isAvailable ?? undefined,
  hasContract: filter.hasContract ?? undefined,

  countriesCodes: filter.countriesCodes ?? undefined,
  professionsIds: filter.professionsIds ?? undefined,
  recruitersIds: filter.recruitersIds ?? undefined,
  technologiesIds: filter.technologiesIds ?? undefined,
  mainTechnologiesIds: filter.mainTechnologiesIds ?? undefined,
  tagsIds: filter.tagsIds ?? undefined,

  rateFrom: filter.rateFrom ?? undefined,
  rateTo: filter.rateTo ?? undefined,

  experienceFrom: filter.experienceFrom ?? undefined,
  experienceTo: filter.experienceTo ?? undefined,

  availableFrom: filter.availableFrom ?? undefined,
  availableTo: filter.availableTo ?? undefined,
});
