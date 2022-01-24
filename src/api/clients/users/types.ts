import { BaseModel } from '../../types';

export interface User extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
}

export interface AddUserRequest {
  email: string;
  firstName: string;
  lastName: string;
}

export interface EditUserRequest {
  email: string;
  firstName: string;
  lastName: string;
}

export interface UsersFilter {
  keyword?: string;
}
