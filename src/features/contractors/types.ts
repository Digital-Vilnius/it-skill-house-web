import { Recruiter } from 'features/recruiters/types';
import { Technology } from 'features/technologies/types';
import { BaseModel } from 'api/types';

export interface Contractor extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  isRemote: boolean;
  technologies: Technology[];
  recruiter: Recruiter;
  rate: number;
  isPublic: boolean;
  availableFrom: string | null;
}

export interface ContractorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  technologiesIds: string[];
  recruiterId: string;
  rate: number;
  location: string;
  isRemote: boolean;
  isPublic: boolean;
  availableFrom: string;
}

export interface ContractorsFilter {
  keyword: string | null;
  rateFrom: number | null;
  rateTo: number | null;
  availableFrom: string | null;
  availableTo: string | null;
  recruitersIds: string[];
  technologiesIds: string[];
  isRemote: boolean | null;
  isPublic: boolean | null;
  isAvailable: boolean | null;
}
