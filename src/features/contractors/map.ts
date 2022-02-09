import { Contractor as ApiContractor } from 'api/clients/contractors/types';
import { Contractor, ContractorFormData } from './types';
import { mapRecruiter } from 'features/recruiters/map';
import { mapTechnology } from 'features/technologies/map';
import { mapEvent } from 'features/events/map';
import { mapNote } from 'features/notes/map';
import { DateUtils } from 'utils';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  recruiter: mapRecruiter(contractor.recruiter),
  availableFrom: DateUtils.formatDateString(contractor.availableFrom),
  experienceSince: DateUtils.formatDateString(contractor.experienceSince),
  notes: contractor.notes.map(mapNote),
  technologies: contractor.technologies.map(mapTechnology),
  mainTechnologies: contractor.mainTechnologies.map(mapTechnology),
  nearestEvent: contractor.nearestEvent ? mapEvent(contractor.nearestEvent) : null,
});

export const mapContractorFormData = (contractor: Contractor): ContractorFormData => ({
  ...contractor,
  recruiterId: contractor.recruiter.id,
  mainTechnologiesIds: contractor.mainTechnologies.map((technology) => technology.id),
  note: '',
});
