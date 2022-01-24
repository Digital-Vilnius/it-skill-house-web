import { Recruiter } from 'features/recruiters/types';
import { Technology } from 'features/technologies/types';
import { BaseModel } from 'api/types';
import { Tag } from 'features/tags/types';
import { Event } from 'features/events/types';
import { Profession } from 'features/professions/types';
import { Note } from 'features/notes/types';
import { Email } from 'features/emails/types';

export interface Contractor extends BaseModel {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  isRemote: boolean;
  isPublic: boolean;
  isAvailable: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  countryCode: string;
  city: string;

  rate: number;
  currency: string;

  lastEmail: Email | null;
  nearestEvent: Event | null;
  profession: Profession;
  recruiter: Recruiter;
  mainTechnology: Technology;

  technologies: Technology[];
  tags: Tag[];
  notes: Note[];

  availableFrom: string;
  experienceSince: string;

  linkedInUrl: string;
  codaId: number;
  cinodeId: number;
}

export interface ContractorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  countryCode: string;
  city: string;

  rate: number;
  currency: string;

  professionId: number;
  recruiterId: number;
  mainTechnologyId: number;

  technologiesIds: number[];
  tagsIds: number[];

  availableFrom: string;
  experienceSince: string;

  linkedInUrl: string;
  codaId: number;
  cinodeId: number;
}

export interface ContractorsFilter {
  keyword: string | null;

  isRemote: boolean | null;
  isPublic: boolean | null;
  isAvailable: boolean | null;
  hasContract: boolean | null;
  isOnSite: boolean | null;

  countriesCodes: string[];
  professionsIds: number[];
  recruitersIds: number[];
  technologiesIds: number[];
  tagsIds: number[];
  mainTechnologiesIds: number[];

  rateFrom: number | null;
  rateTo: number | null;

  experienceFrom: string | null;
  experienceTo: string | null;

  availableFrom: string | null;
  availableTo: string | null;
}
