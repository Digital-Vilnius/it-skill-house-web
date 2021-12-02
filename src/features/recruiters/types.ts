export interface Recruiter {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  updated: string | null;
  created: string;
}

export interface RecruiterFormData {
  firstName: string;
  lastName: string;
  email: string;
}
