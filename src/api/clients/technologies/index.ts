import { ListRequest, ListResponse, ResultResponse } from '../../types';
import httpClient from '../../httpClient';
import { Technology, AddTechnologyRequest } from './types';

const baseUrl = '/technologies';

export const getTechnologies = async () => {
  return httpClient.get<ListRequest, ListResponse<Technology>>(baseUrl);
};

export const addTechnology = async (request: AddTechnologyRequest) => {
  return httpClient.post<AddTechnologyRequest, ResultResponse<Technology>>(baseUrl, request);
};
