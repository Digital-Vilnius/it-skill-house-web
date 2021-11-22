import { ListRequest } from '../../types';
import httpClient from '../../httpClient';
import { Transaction, AddTransactionRequest, EditTransactionRequest, TransactionsFilter } from './types';
import { transactionsMock } from './mocks';

const baseUrl = '/transactions';

export const getTransactions = async (request?: ListRequest<TransactionsFilter>) => {
  console.log(request);
  // const params = { ...request?.paging, ...request?.sort };

  // return httpClient.get<ListRequest, ListResponse<Transaction>>(baseUrl, { params });
  return Promise.resolve({ data: transactionsMock, total: transactionsMock.length });
};

export const getTransaction = async (id: string) => {
  return httpClient.get<void, Transaction>(`${baseUrl}/${id}`);
};

export const deleteTransaction = async (id: string) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addTransaction = async (request: AddTransactionRequest) => {
  return httpClient.post<AddTransactionRequest, Transaction>(baseUrl, request);
};

export const editTransaction = async (id: string, request: EditTransactionRequest) => {
  return httpClient.put<EditTransactionRequest, Transaction>(`${baseUrl}/${id}`, request);
};
