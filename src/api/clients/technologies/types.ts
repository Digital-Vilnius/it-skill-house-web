import { BaseModel } from '../../types';

export interface Technology extends BaseModel {
  name: string;
}

export interface AddTechnologyRequest {
  name: string;
}
