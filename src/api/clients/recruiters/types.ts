import { BaseModel } from '../../types';

export interface Recruiter extends BaseModel {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}
