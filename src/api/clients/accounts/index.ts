import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Account, AddAccountRequest, EditAccountRequest } from './types';

const baseUrl = '/accounts';

export const getAccounts = async (request?: ListRequest) => {
  const params = { ...request?.paging, ...request?.sort };

  return httpClient.get<ListRequest, ListResponse<Account>>(baseUrl, { params });
};

export const getAccount = async (id: string) => {
  return httpClient.get<void, Account>(`${baseUrl}/${id}`);
};

export const deleteAccount = async (id: string) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addAccount = async (request: AddAccountRequest) => {
  return httpClient.post<AddAccountRequest, Account>(baseUrl, request);
};

export const editAccount = async (id: string, request: EditAccountRequest) => {
  return httpClient.put<EditAccountRequest, Account>(`${baseUrl}/${id}`, request);
};
