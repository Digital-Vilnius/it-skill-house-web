import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Tag, AddTagRequest } from './types';

const baseUrl = '/tags';

export const getTags = async () => {
  return httpClient.get<ListRequest, ListResponse<Tag>>(baseUrl);
};

export const getTag = async (id: number) => {
  return httpClient.get<void, Tag>(`${baseUrl}/${id}`);
};

export const addTag = async (request: AddTagRequest) => {
  return httpClient.post<AddTagRequest, Tag>(baseUrl, request);
};
