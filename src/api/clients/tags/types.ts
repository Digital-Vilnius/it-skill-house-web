import { BaseModel } from '../../types';

export interface Tag extends BaseModel {
  name: string;
  count: number;
}

export interface AddTagRequest {
  name: string;
}
