import { ListRequest, ListResponse, ResultResponse } from '../../types';
import httpClient from '../../httpClient';
import { Contractor, SaveContractorRequest, ContractorsFilter } from './types';

const baseUrl = '/contractors';

export const getContractors = async (request: ListRequest<ContractorsFilter>) => {
  const params = { ...request.paging, ...request.sort, ...request.filter };
  return httpClient.get<ListRequest<ContractorsFilter>, ListResponse<Contractor>>(baseUrl, { params });
};

export const getContractor = async (id: number) => {
  return httpClient.get<void, ResultResponse<Contractor>>(`${baseUrl}/${id}`);
};

export const deleteContractor = async (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addContractor = async (request: SaveContractorRequest) => {
  return httpClient.post<SaveContractorRequest, Contractor>(baseUrl, request);
};

export const editContractor = async (id: number, request: SaveContractorRequest) => {
  return httpClient.put<SaveContractorRequest, ResultResponse<Contractor>>(`${baseUrl}/${id}`, request);
};
