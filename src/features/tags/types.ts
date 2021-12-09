import { BaseModel } from 'api/types';

export interface Tag extends BaseModel {
  name: string;
}

export interface TagFormData {
  name: string;
}
