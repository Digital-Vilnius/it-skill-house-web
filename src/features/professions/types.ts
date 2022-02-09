import { BaseModel } from 'api/types';

export interface Profession extends BaseModel {
  name: string;
  count: number;
}
