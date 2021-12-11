import {
  Contractor as ApiContractor,
  ContractorsFilter as ApiContractorFilter,
} from 'api/clients/contractors/types';
import { Contractor, ContractorAddFormData, ContractorsFilter, ContractorEditFormData } from './types';
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

export const mapContractorAddFormData = (contractor: Contractor): ContractorAddFormData => ({
  firstName: contractor.firstName,
  lastName: contractor.lastName,
  email: contractor.email,
  phone: contractor.phone,

  isRemote: contractor.isRemote,
  isPublic: contractor.isPublic,
  hasContract: contractor.hasContract,
  isOnSite: contractor.isOnSite,

  location: contractor.location,
  rate: contractor.rate,

  professionId: contractor.profession.id,
  recruiterId: contractor.recruiter.id,
  mainTechnologyId: contractor.mainTechnology.id,

  technologiesIds: contractor.technologies.map((technology) => technology.id),
  tagsIds: contractor.tags.map((tag) => tag.id),

  availableFrom: contractor.availableFrom,
  experienceSince: contractor.experienceSince,

  linkedInUrl: contractor.linkedInUrl,
  codaId: contractor.codaId,
  cinodeId: contractor.cinodeId,
});

export const mapContractorEditFormData = (contractor: Contractor): ContractorEditFormData => ({
  isRemote: contractor.isRemote,
  isPublic: contractor.isPublic,
  hasContract: contractor.hasContract,
  isOnSite: contractor.isOnSite,

  location: contractor.location,
  rate: contractor.rate,

  professionId: contractor.profession.id,
  recruiterId: contractor.recruiter.id,
  mainTechnologyId: contractor.mainTechnology.id,

  technologiesIds: contractor.technologies.map((technology) => technology.id),
  tagsIds: contractor.tags.map((tag) => tag.id),

  availableFrom: contractor.availableFrom,
  experienceSince: contractor.experienceSince,

  linkedInUrl: contractor.linkedInUrl,
  codaId: contractor.codaId,
  cinodeId: contractor.cinodeId,
});

export const mapContractorFilter = (filter: ContractorsFilter): ApiContractorFilter => ({
  keyword: filter.keyword ?? undefined,

  isRemote: filter.isRemote ?? undefined,
  isPublic: filter.isPublic ?? undefined,
  isAvailable: filter.isAvailable ?? undefined,
  hasContract: filter.hasContract ?? undefined,

  professionsIds: filter.professionsIds ?? undefined,
  recruitersIds: filter.recruitersIds ?? undefined,
  technologiesIds: filter.technologiesIds ?? undefined,
  tagsIds: filter.tagsIds ?? undefined,

  rateFrom: filter.rateFrom ?? undefined,
  rateTo: filter.rateTo ?? undefined,

  experienceFrom: filter.experienceFrom ?? undefined,
  experienceTo: filter.experienceTo ?? undefined,

  availableFrom: filter.availableFrom ?? undefined,
  availableTo: filter.availableTo ?? undefined,
});
