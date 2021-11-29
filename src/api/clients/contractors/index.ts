import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Contractor, AddContractorRequest, EditContractorRequest, ContractorsFilter } from './types';

const baseUrl = '/contractors';

export const getContractors = async (request?: ListRequest<ContractorsFilter>) => {
  const params = { ...request?.paging, ...request?.sort };
  return httpClient.get<ListRequest, ListResponse<Contractor>>(baseUrl, { params });
};

export const getContractor = async (id: string) => {
  return httpClient.get<void, Contractor>(`${baseUrl}/${id}`);
};

export const deleteContractor = async (id: string) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addContractor = async (request: AddContractorRequest) => {
  return httpClient.post<AddContractorRequest, Contractor>(baseUrl, request);
};

export const editContractor = async (id: string, request: EditContractorRequest) => {
  return httpClient.put<EditContractorRequest, Contractor>(`${baseUrl}/${id}`, request);
};
