import { User } from '../users/types';

export interface Recruiter {
  id: string;
  user: User;
  updated: string | null;
  created: string;
}

export interface AddRecruiterRequest {
  userId: string;
}

export interface EditRecruiterRequest {
  userId: string;
}

export interface RecruitersFilter {
  amountFrom?: number;
}
