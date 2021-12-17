import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { Event } from '../events/types';
import { BaseModel } from '../../types';
import { Tag } from '../tags/types';
import { Profession } from '../professions/types';
import { Note } from '../notes/types';

export interface Contractor extends BaseModel {
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

export interface AddContractorRequest extends EditContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface EditContractorRequest {
  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  rate: number;
  currency: string;

  countryCode: string;
  city: string;

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
