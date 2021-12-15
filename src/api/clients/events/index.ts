import httpClient from '../../httpClient';
import { ResultResponse } from '../../types';
import { AddEventRequest, EditEventRequest, Event } from './types';

const baseUrl = '/events';

export const addEvent = async (request: AddEventRequest) => {
  return httpClient.post<AddEventRequest, ResultResponse<Event>>(baseUrl, request);
};

export const getEvent = async (id: number) => {
  return httpClient.get<void, ResultResponse<Event>>(`${baseUrl}/${id}`);
};

export const editEvent = async (id: number, request: EditEventRequest) => {
  return httpClient.put<EditEventRequest, ResultResponse<Event>>(`${baseUrl}/${id}`, request);
};
