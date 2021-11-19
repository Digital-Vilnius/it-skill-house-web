export interface Account {
  id: string;
  name: string;
  updated?: string;
  created: string;
}

export interface AddAccountRequest {
  name: string;
}

export interface EditAccountRequest {
  name: string;
}
