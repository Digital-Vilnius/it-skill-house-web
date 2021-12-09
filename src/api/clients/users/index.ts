import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { User, AddUserRequest, EditUserRequest, UsersFilter } from './types';

const baseUrl = '/users';

export const getUsers = async (request?: ListRequest<UsersFilter>) => {
  const params = { ...request?.paging, ...request?.sort };
  return httpClient.get<ListRequest, ListResponse<User>>(baseUrl, { params });
};

export const getUser = async (id: number) => {
  return httpClient.get<void, User>(`${baseUrl}/${id}`);
};

export const deleteUser = async (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addUser = async (request: AddUserRequest) => {
  return httpClient.post<AddUserRequest, User>(baseUrl, request);
};

export const editUser = async (id: number, request: EditUserRequest) => {
  return httpClient.put<EditUserRequest, User>(`${baseUrl}/${id}`, request);
};
