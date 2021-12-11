import { BaseModel } from '../../types';

export interface Profession extends BaseModel {
  name: string;
  count: number;
}

export interface AddProfessionRequest {
  name: string;
}
