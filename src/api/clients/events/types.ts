import { BaseModel } from '../../types';

export interface Event extends BaseModel {
  title: string;
  content: string;
  date: string;
  link: string;
  location: string;
}

export interface AddEventRequest {
  title: string;
  content: string;
  date: string;
  link: string;
  location: string;
  contractorId: number;
}

export interface EditEventRequest {
  title: string;
  content: string;
  date: string;
  link: string;
  location: string;
}
