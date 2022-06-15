import { BaseModel } from '../../types';
import { Recruiter } from '../recruiters/types';

export interface Email extends BaseModel {
  subject: string;
  body: string;
  sender: Recruiter;
}

export interface SendEmailRequest {
  subject: string;
  body: string;
  contractorsIds: number[];
}

export interface EmailsFilter {
  contractorId: number;
}
