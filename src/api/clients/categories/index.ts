import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Category, AddCategoryRequest, EditCategoryRequest } from './types';

const baseUrl = '/categories';

export const getCategories = async (request?: ListRequest) => {
  const params = { ...request?.paging, ...request?.sort };

  return httpClient.get<ListRequest, ListResponse<Category>>(baseUrl, { params });
};

export const getCategory = async (id: string) => {
  return httpClient.get<void, Category>(`${baseUrl}/${id}`);
};

export const deleteCategory = async (id: string) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addCategory = async (request: AddCategoryRequest) => {
  return httpClient.post<AddCategoryRequest, Category>(baseUrl, request);
};

export const editCategory = async (id: string, request: EditCategoryRequest) => {
  return httpClient.put<EditCategoryRequest, Category>(`${baseUrl}/${id}`, request);
};
