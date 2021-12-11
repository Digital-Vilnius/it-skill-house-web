import { BaseModel } from 'api/types';

export interface Technology extends BaseModel {
  name: string;
  count: number;
}

export interface TechnologyFormData {
  name: string;
}
