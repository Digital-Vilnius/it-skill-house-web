import { Recruiter } from '../recruiters/types';

export interface Contractor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  recruiter: Recruiter;
  technologies: string[];
  updated: string | null;
  created: string;
}

export interface AddContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  recruiterId: string;
  technologies: string[];
}

export interface EditContractorRequest {
  firstName: string;
  lastName: string;
  email: string;
  recruiterId: string;
  technologies: string[];
}

export interface ContractorsFilter {
  amountFrom?: number;
}
