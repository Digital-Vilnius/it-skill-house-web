import { BaseModel } from '../../types';
import { User } from '../users/types';

export interface Note extends BaseModel {
  content: string;
  createdBy: User;
}

export interface AddNoteRequest {
  content: string;
  contractorId: number;
}

export interface EditNoteRequest {
  content: string;
}

export interface NotesFilter {
  contractorId: number;
}
