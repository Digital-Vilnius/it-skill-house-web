import { BaseModel } from '../../types';
import { Recruiter } from '../recruiters/types';

export interface Note extends BaseModel {
  content: string;
  createdBy: Recruiter;
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
