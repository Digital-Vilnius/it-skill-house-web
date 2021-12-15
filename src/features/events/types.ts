import { BaseModel } from 'api/types';

export interface Event extends BaseModel {
  title: string;
  content: string;
  date: string;
  link: string;
  location: string;
}

export interface EventFormData {
  title: string;
  content: string;
  date: string;
  link: string;
  location: string;
}
