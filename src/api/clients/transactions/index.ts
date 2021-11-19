import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Transaction, AddTransactionRequest, EditTransactionRequest } from './types';

const baseUrl = '/transactions';

export const getTransactions = async (request?: ListRequest): Promise<ListResponse<Transaction>> => {
  const params = { ...request?.paging, ...request?.sort };

  return httpClient.get<ListRequest, ListResponse<Transaction>>(baseUrl, { params });
};

export const getTransaction = async (id: string): Promise<Transaction> => {
  return httpClient.get<void, Transaction>(`${baseUrl}/${id}`);
};

export const deleteTransaction = async (id: string): Promise<void> => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addTransaction = async (request: AddTransactionRequest): Promise<Transaction> => {
  return httpClient.post<AddTransactionRequest, Transaction>(baseUrl, request);
};

export const editTransaction = async (id: string, request: EditTransactionRequest): Promise<Transaction> => {
  return httpClient.put<EditTransactionRequest, Transaction>(`${baseUrl}/${id}`, request);
};
