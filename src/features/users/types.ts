import { BaseModel } from 'api/types';

export interface User extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
}
