import { Contractor as ApiContractor, SaveContractorRequest } from 'api/clients/contractors/types';
import { Contractor } from './types';
import { mapEvent } from 'features/events/map';
import { mapNote } from 'features/notes/map';
import { DateUtils } from 'utils';

export const mapContractor = (contractor: ApiContractor): Contractor => ({
  ...contractor,
  lastNote: contractor.lastNote ? mapNote(contractor.lastNote) : null,
  nearestEvent: contractor.nearestEvent ? mapEvent(contractor.nearestEvent) : null,
  availableFrom: DateUtils.formatDateString(contractor.availableFrom),
  updated: DateUtils.formatDateString(contractor.updated),
  created: DateUtils.formatDateStringStrict(contractor.created),
});

export const mapSaveContractorRequest = (contractor: Contractor): SaveContractorRequest => ({
  ...contractor,
  mainTechnologiesIds: contractor.mainTechnologies.map((technology) => technology.id),
  technologiesIds: contractor.technologies.map((technology) => technology.id),
  tagsIds: contractor.tags.map((technology) => technology.id),
  recruiterId: contractor.recruiter.id,
  professionId: contractor.profession?.id ?? null,
  note: '',
});

export const mapContractorToOption = (contractor: Contractor) => ({
  value: contractor.id,
  label: contractor.email,
});
