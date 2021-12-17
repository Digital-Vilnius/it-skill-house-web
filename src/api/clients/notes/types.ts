import { BaseModel } from '../../types';

export interface Note extends BaseModel {
  title: string;
  content: string;
  date: string;
}

export interface AddNoteRequest {
  title: string;
  content: string;
  date: string;
  contractorId: number;
}

export interface EditNoteRequest {
  title: string;
  content: string;
  date: string;
}

export interface NotesFilter {
  contractorId: number;
}
