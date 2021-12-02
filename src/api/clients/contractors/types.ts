import { Recruiter } from '../recruiters/types';
import { Technology } from '../technologies/types';
import { BaseModel } from '../../types';

export interface Contractor extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  isRemote: boolean;
  location: string;
  rate: number;
  recruiter: Recruiter;
  technologies: Technology[];
}

export interface AddContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  recruiterId: string;
  location: string;
  isRemote: boolean;
  rate: number;
  technologiesIds: string[];
}

export interface EditContractorRequest {
  recruiterId: string;
  technologiesIds: string[];
}

export interface ContractorsFilter {
  amountFrom?: number;
}
