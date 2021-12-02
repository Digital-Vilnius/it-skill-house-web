export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  updated: string | null;
  created: string;
}

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
}
