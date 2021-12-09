import { ListRequest, ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Recruiter, AddRecruiterRequest, EditRecruiterRequest, RecruitersFilter } from './types';

const baseUrl = '/recruiters';

export const getRecruiters = async (request?: ListRequest<RecruitersFilter>) => {
  const params = { ...request?.paging, ...request?.sort };
  return httpClient.get<ListRequest, ListResponse<Recruiter>>(baseUrl, { params });
};

export const getRecruiter = async (id: number) => {
  return httpClient.get<void, Recruiter>(`${baseUrl}/${id}`);
};

export const deleteRecruiter = async (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};

export const addRecruiter = async (request: AddRecruiterRequest) => {
  return httpClient.post<AddRecruiterRequest, Recruiter>(baseUrl, request);
};

export const editRecruiter = async (id: number, request: EditRecruiterRequest) => {
  return httpClient.put<EditRecruiterRequest, Recruiter>(`${baseUrl}/${id}`, request);
};
