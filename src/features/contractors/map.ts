import { Contractor as ApiContractor, SaveContractorRequest } from 'api/clients/contractors/types';
import { Contractor } from './types';
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

export const mapContractorFormData = (contractor: Contractor): SaveContractorRequest => ({
  ...contractor,
  mainTechnologiesIds: contractor.mainTechnologies.map((technology) => technology.id),
  technologiesIds: contractor.technologies.map((technology) => technology.id),
  tagsIds: contractor.tags.map((technology) => technology.id),
  recruiterId: contractor.recruiter.id,
  professionId: contractor.profession?.id ?? null,
  note: '',
});
