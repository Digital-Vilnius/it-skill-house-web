import { BaseModel } from '../../types';

export interface Tag extends BaseModel {
  name: string;
}

export interface AddTagRequest {
  name: string;
}
