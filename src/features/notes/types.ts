import { BaseModel } from 'api/types';

export interface Note extends BaseModel {
  content: string;
}

export interface NoteFormData {
  content: string;
}
