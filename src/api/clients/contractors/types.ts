import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { BaseModel } from '../../types';

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
}

export interface AddContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recruiterId: string;
  location: string;
  isRemote: boolean;
  rate: number;
  technologiesIds: string[];
  isPublic: boolean;
  availableFrom: string;
}

export interface EditContractorRequest {
  recruiterId: string;
  technologiesIds: string[];
}

export interface ContractorsFilter {
  keyword?: string;
  availableFrom?: string;
  availableTo?: string;
  recruitersIds?: string[];
  technologiesIds?: string[];
  isRemote?: boolean;
  isPublic?: boolean;
  isAvailable?: boolean;
  rateFrom?: number | null;
  rateTo?: number | null;
}
