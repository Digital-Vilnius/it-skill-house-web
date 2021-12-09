import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { BaseModel } from '../../types';
import { Tag } from '../tags/types';

export interface Contractor extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isRemote: boolean;
  location: string;
  rate: number;
  recruiter: Recruiter;
  technologies: Technology[];
  mainTechnology: Technology;
  isPublic: boolean;
  availableFrom: string;
  experienceSince: string;
  codaId: number;
  cinodeId: number;
  tags: Tag[];
}

export interface AddContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recruiterId: number;
  location: string;
  isRemote: boolean;
  rate: number;
  technologiesIds: number[];
  tagsIds: number[];
  codaId: number;
  cinodeId: number;
  isPublic: boolean;
  availableFrom: string;
  experienceSince: string;
}

export interface EditContractorRequest {
  recruiterId: string;
  technologiesIds: string[];
}

export interface ContractorsFilter {
  keyword?: string;
  availableFrom?: string;
  availableTo?: string;
  recruitersIds?: number[];
  technologiesIds?: number[];
  isRemote?: boolean;
  isPublic?: boolean;
  isAvailable?: boolean;
  rateFrom?: number;
  tagsIds?: number[];
  rateTo?: number;
  experienceFrom?: string;
  experienceTo?: string;
}
