import { BaseModel } from 'api/types';

export interface User extends BaseModel {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}
