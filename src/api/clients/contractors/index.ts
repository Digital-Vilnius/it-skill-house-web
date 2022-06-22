import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Contractor, SaveContractorRequest, ContractorsFilter } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

const baseUrl = '/contractors';

export const getContractors = async (request: ListRequest<ContractorsFilter>) => {
  const cleanedFilter = pickBy(request.filter, identity);
  const params = { ...request.paging, ...request.sort, ...cleanedFilter };
  return httpClient.get<ListRequest<ContractorsFilter>, ListResponse<Contractor>>(baseUrl, {
    params,
  });
};

export const getContractor = async (id: number) => {
  return httpClient.get<void, Contractor>(`${baseUrl}/${id}`);
};

export const deleteContractor = async (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addContractor = async (request: SaveContractorRequest) => {
  return httpClient.post<SaveContractorRequest, Contractor>(baseUrl, request);
};

export const editContractor = async (id: number, request: SaveContractorRequest) => {
  return httpClient.put<SaveContractorRequest, Contractor>(`${baseUrl}/${id}`, request);
};

export const updateContractorMailedDate = async (id: number) => {
  return httpClient.put<void, Contractor>(`${baseUrl}/${id}/mailed`);
};
