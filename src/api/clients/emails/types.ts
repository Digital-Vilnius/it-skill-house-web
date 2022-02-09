import { BaseModel } from '../../types';
import { User } from '../users/types';

export interface Email extends BaseModel {
  subject: string;
  body: string;
  sender: User;
}

export interface SendEmailRequest {
  subject: string;
  body: string;
  recipientsIds: number[];
}

export interface EmailsFilter {
  contractorId: number;
}
