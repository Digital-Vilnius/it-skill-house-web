export interface Recruiter {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  updated: string | null;
  created: string;
}

export interface RecruiterFormData {
  firstName: string;
  phone: string;
  lastName: string;
  email: string;
}
