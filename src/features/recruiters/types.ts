import { BaseModel } from 'api/types';

export interface Recruiter extends BaseModel {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}

export interface RecruiterFormData {
  firstName: string;
  phone: string;
  lastName: string;
  email: string;
}
