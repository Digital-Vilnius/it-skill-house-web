import { Recruiter } from 'features/recruiters/types';

export interface Contractor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  technologies: string[];
  recruiter: Recruiter;
  updated: string | null;
  created: string;
}

export interface ContractorFormData {
  firstName: string;
  lastName: string;
  email: string;
  technologies: string[];
  recruiterId: string;
}
