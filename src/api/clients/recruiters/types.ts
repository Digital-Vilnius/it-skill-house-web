export interface Recruiter {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
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
