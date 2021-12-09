import { BaseModel } from '../../types';

export interface Recruiter extends BaseModel {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface AddRecruiterRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface EditRecruiterRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface RecruitersFilter {
  amountFrom?: number;
}
