import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { ContractorRate, AddContractorRateRequest } from './types';

const baseUrl = '/contractorRates';

export const getContractorRates = async () => {
  return httpClient.get<ListRequest, ListResponse<ContractorRate>>(baseUrl);
};

export const getContractorRate = async (id: string) => {
  return httpClient.get<void, ContractorRate>(`${baseUrl}/${id}`);
};

export const addContractorRate = async (request: AddContractorRateRequest) => {
  return httpClient.post<AddContractorRateRequest, ContractorRate>(baseUrl, request);
};
