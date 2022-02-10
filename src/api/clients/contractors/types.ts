import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { Event } from '../events/types';
import { BaseModel } from '../../types';
import { Tag } from '../tags/types';
import { Profession } from '../professions/types';
import { Note } from '../notes/types';
import { Email } from '../emails/types';

export interface Contractor extends BaseModel {
  linkedInUrl: string | null;

  codaId: number | null;
  cinodeId: number | null;

  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;

  countryCode: string;
  city: string | null;

  rate: number | null;
  currency: string | null;

  availableFrom: string | null;
  experienceSince: string | null;

  isAvailable: boolean;
  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  lastEmail: Email | null;
  nearestEvent: Event | null;
  profession: Profession | null;
  recruiter: Recruiter;

  notes: Note[];
  tags: Tag[];
  technologies: Technology[];
  mainTechnologies: Technology[];
}

export interface SaveContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;

  note: string;
  linkedInUrl: string | null;

  codaId: number | null;
  cinodeId: number | null;

  countryCode: string;
  city: string | null;

  rate: number | null;
  currency: string | null;

  availableFrom: string | null;
  experienceSince: string | null;

  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  professionId: number | null;
  recruiterId: number;

  tagsIds: number[];
  technologiesIds: number[];
  mainTechnologiesIds: number[];
}

export interface ContractorsFilter {
  keyword?: string;
  isRemote?: boolean;
  isPublic?: boolean;
  isAvailable?: boolean;
  hasContract?: boolean;
  isOnSite?: boolean;
  countriesCodes?: string[];
  professionsIds?: number[];
  recruitersIds?: number[];
  technologiesIds?: number[];
  mainTechnologiesIds?: number[];
  tagsIds?: number[];
  rateFrom?: number;
  rateTo?: number;
  experienceFrom?: string;
  experienceTo?: string;
  availableFrom?: string;
  availableTo?: string;
}
