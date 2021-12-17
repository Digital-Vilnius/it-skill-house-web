import { BaseModel } from 'api/types';

export interface Note extends BaseModel {
  title: string;
  content: string;
  date: string;
}

export interface NoteFormData {
  title: string;
  content: string;
  date: string;
}
