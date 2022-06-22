import { BaseModel } from 'api/types';

export interface Profile extends BaseModel {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
