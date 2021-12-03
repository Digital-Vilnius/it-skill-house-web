export interface Recruiter {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  updated: string | null;
  created: string;
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
