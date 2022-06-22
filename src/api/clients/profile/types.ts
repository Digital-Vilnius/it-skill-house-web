import { BaseModel } from '../../types';

export interface Profile extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
