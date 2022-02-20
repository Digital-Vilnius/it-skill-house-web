import httpClient from '../../httpClient';
import { LoggedUser } from './types';
import { ResultResponse } from '../../types';

const baseUrl = '/authentication';

export const getLoggedUser = async () => {
  return httpClient.get<void, ResultResponse<LoggedUser>>(`${baseUrl}/me`);
};
