import { ListRequest, ListResponse, ResultResponse } from '../../types';
import httpClient from '../../httpClient';
import { Tag, AddTagRequest } from './types';

const baseUrl = '/tags';

export const getTags = async () => {
  return httpClient.get<ListRequest, ListResponse<Tag>>(baseUrl);
};

export const addTag = async (request: AddTagRequest) => {
  return httpClient.post<AddTagRequest, ResultResponse<Tag>>(baseUrl, request);
};
