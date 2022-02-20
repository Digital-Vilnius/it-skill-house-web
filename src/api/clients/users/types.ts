import { BaseModel } from '../../types';

export interface User extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}
