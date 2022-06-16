import { BaseModel } from '../../types';

export interface Event extends BaseModel {
  title: string;
  content: string;
  date: string;
}

export interface AddEventRequest {
  title: string;
  content: string;
  date: string;
  contractorId: number;
}

export interface EditEventRequest {
  title: string;
  content: string;
  date: string;
}

export interface EventsFilter {
  contractorId: number;
}
