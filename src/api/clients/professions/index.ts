import { ListResponse, ResultResponse } from '../../types';
import httpClient from '../../httpClient';
import { Profession, AddProfessionRequest } from './types';

const baseUrl = '/professions';

export const getProfessions = async () => {
  return httpClient.get<void, ListResponse<Profession>>(baseUrl);
};

export const addProfession = async (request: AddProfessionRequest) => {
  return httpClient.post<AddProfessionRequest, ResultResponse<Profession>>(baseUrl, request);
};
