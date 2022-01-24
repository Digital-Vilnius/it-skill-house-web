import { BaseModel } from '../../types';

export interface Technology extends BaseModel {
  name: string;
  count: number;
}

export interface AddTechnologyRequest {
  name: string;
}

export interface TechnologiesFilter {
  keyword?: string;
}
