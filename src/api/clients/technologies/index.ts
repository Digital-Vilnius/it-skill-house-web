import { ListRequest, ListResponse, ResultResponse } from '../../types';
import httpClient from '../../httpClient';
import { Technology, AddTechnologyRequest, TechnologiesFilter } from './types';

const baseUrl = '/technologies';

export const getTechnologies = async (request?: ListRequest<TechnologiesFilter>) => {
  const params = { ...request?.paging, ...request?.sort };
  return httpClient.get<ListRequest, ListResponse<Technology>>(baseUrl, { params });
};

export const addTechnology = async (request: AddTechnologyRequest) => {
  return httpClient.post<AddTechnologyRequest, ResultResponse<Technology>>(baseUrl, request);
};
