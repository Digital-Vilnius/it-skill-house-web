import httpClient from '../../httpClient';
import { ListRequest, ListResponse, ResultResponse } from '../../types';
import { AddNoteRequest, EditNoteRequest, Note, NotesFilter } from './types';

const baseUrl = '/notes';

export const addNote = async (request: AddNoteRequest) => {
  return httpClient.post<AddNoteRequest, ResultResponse<Note>>(baseUrl, request);
};

export const getNote = async (id: number) => {
  return httpClient.get<void, ResultResponse<Note>>(`${baseUrl}/${id}`);
};

export const editNote = async (id: number, request: EditNoteRequest) => {
  return httpClient.put<EditNoteRequest, ResultResponse<Note>>(`${baseUrl}/${id}`, request);
};

export const getNotes = async (request: ListRequest<NotesFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<ListRequest<NotesFilter>, ListResponse<Note>>(baseUrl, { params });
};
