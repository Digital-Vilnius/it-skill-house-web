import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { Event } from '../events/types';
import { BaseModel } from '../../types';
import { Tag } from '../tags/types';
import { Profession } from '../professions/types';
import { Note } from '../notes/types';

export interface Contractor extends BaseModel {
  linkedInUrl: string | null;
  codaId: number | null;
  cinodeId: number | null;
  userId: number;
  firstName: string;
  lastName: string;
  reference: string | null;
  mailed: string | null;
  email: string;
  phone: string | null;
  countryCode: string;
  city: string | null;
  rate: number | null;
  currency: string | null;
  availableFrom: string | null;
  experienceSince: number | null;
  isAvailable: boolean;
  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;
  lastEmail: string | null;
  nearestEvent: Event | null;
  profession: Profession | null;
  recruiter: Recruiter;
  lastNote: Note | null;
  tags: Tag[];
  technologies: Technology[];
  mainTechnologies: Technology[];
}

export interface SaveContractorRequest {
  firstName: string;
  lastName: string;
  reference: string | null;
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
  experienceSince: number | null;
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
  rateTo?: number;
  experienceFrom?: number;
  availableFrom?: string;
}

export interface UpdateContractorsMailedDateRequest {
  contractorsIds: number[];
}
