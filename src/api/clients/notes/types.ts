import { BaseModel } from '../../types';

export interface Note extends BaseModel {
  content: string;
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
