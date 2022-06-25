import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import {
  Contractor,
  SaveContractorRequest,
  ContractorsFilter,
  UpdateContractorsMailedDateRequest,
} from './types';

const baseUrl = '/contractors';

export const getContractors = async (request: ListRequest<ContractorsFilter>) => {
  const params = { ...request.paging, ...request.sort };

  return httpClient.post<ContractorsFilter, ListResponse<Contractor>>(
    `${baseUrl}/all`,
    request.filter,
    {
      params,
    }
  );
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

export const updateContractorsMailedDate = async (request: UpdateContractorsMailedDateRequest) => {
  return httpClient.put<UpdateContractorsMailedDateRequest>(`${baseUrl}/mailed`, request);
};
