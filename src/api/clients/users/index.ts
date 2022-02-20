import { ListResponse } from '../../types';
import httpClient from '../../httpClient';
import { User } from './types';

const baseUrl = '/users';

export const getUsers = async () => {
  return httpClient.get<void, ListResponse<User>>(baseUrl);
};
