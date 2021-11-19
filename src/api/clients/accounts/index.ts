import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Account, AddAccountRequest, EditAccountRequest } from './types';

const baseUrl = '/accounts';

export const getAccounts = async (request?: ListRequest): Promise<ListResponse<Account>> => {
  const params = { ...request?.paging, ...request?.sort };

  return httpClient.get<ListRequest, ListResponse<Account>>(baseUrl, { params });
};

export const getAccount = async (id: string): Promise<Account> => {
  return httpClient.get<void, Account>(`${baseUrl}/${id}`);
};

export const deleteAccount = async (id: string): Promise<void> => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addAccount = async (request: AddAccountRequest): Promise<Account> => {
  return httpClient.post<AddAccountRequest, Account>(baseUrl, request);
};

export const editAccount = async (id: string, request: EditAccountRequest): Promise<Account> => {
  return httpClient.put<EditAccountRequest, Account>(`${baseUrl}/${id}`, request);
};
