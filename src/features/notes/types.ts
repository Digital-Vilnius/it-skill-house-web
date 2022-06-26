import { BaseModel } from 'api/types';
import { Recruiter } from 'api/clients/recruiters/types';

export interface Note extends BaseModel {
  content: string;
  createdBy: Recruiter;
}

export interface NoteFormData {
  content: string;
}
