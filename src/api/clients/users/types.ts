export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  updated: string | null;
  created: string;
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
  amountFrom?: number;
}
