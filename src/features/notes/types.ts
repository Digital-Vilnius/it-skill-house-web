import { BaseModel } from 'api/types';
import { User } from '../users/types';

export interface Note extends BaseModel {
  content: string;
  createdBy: User;
}

export interface NoteFormData {
  content: string;
}
