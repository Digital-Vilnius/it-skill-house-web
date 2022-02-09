import { BaseModel } from 'api/types';

export interface Recruiter extends BaseModel {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
