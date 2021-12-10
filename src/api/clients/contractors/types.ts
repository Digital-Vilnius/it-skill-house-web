import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { BaseModel } from '../../types';
import { Tag } from '../tags/types';
import { Profession } from '../professions/types';

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

  location: string;
  rate: number;

  profession: Profession;
  recruiter: Recruiter;
  mainTechnology: Technology;

  technologies: Technology[];
  tags: Tag[];

  availableFrom: string;
  experienceSince: string;

  linkedInUrl: string;
  codaId: number;
  cinodeId: number;
}

export interface AddContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  location: string;
  rate: number;

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

export interface EditContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  isRemote: boolean;
  isPublic: boolean;
  hasContract: boolean;
  isOnSite: boolean;

  location: string;
  rate: number;

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

  professionsIds?: number[];
  recruitersIds?: number[];
  technologiesIds?: number[];
  tagsIds?: number[];

  rateFrom?: number;
  rateTo?: number;

  experienceFrom?: string;
  experienceTo?: string;

  availableFrom?: string;
  availableTo?: string;
}
