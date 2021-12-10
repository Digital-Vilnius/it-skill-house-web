import { BaseModel } from '../../types';

export interface Profession extends BaseModel {
  name: string;
}

export interface AddProfessionRequest {
  name: string;
}
