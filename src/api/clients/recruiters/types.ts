import { BaseModel } from '../../types';

export interface Recruiter extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
