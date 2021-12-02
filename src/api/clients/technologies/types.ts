export interface Technology {
  id: string;
  name: string;
  updated: string | null;
  created: string;
}

export interface AddTechnologyRequest {
  name: string;
}
