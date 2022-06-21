import { BaseModel } from 'api/types';

export interface Email extends BaseModel {
  subject: string;
  body: string;
}

export interface EmailFormData {
  subject: string;
  body: string;
}
