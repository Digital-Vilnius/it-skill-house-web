import { ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { Recruiter } from './types';

const baseUrl = '/recruiters';

export const getRecruiters = async () => {
  return httpClient.get<void, ListResponse<Recruiter>>(baseUrl);
};
