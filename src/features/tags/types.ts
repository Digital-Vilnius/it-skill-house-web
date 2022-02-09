import { BaseModel } from 'api/types';

export interface Tag extends BaseModel {
  name: string;
  count: number;
}
