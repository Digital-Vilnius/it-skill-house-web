import httpClient from '../../httpClient';
import { Profile } from './types';

const baseUrl = '/profile';

export const getProfile = async () => {
  return httpClient.get<void, Profile>(baseUrl);
};
