import httpClient from '../../httpClient';
import { LoginRequest, LoginResponse } from './types';

const baseUrl = '';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, LoginResponse>(`${baseUrl}/login`, request);
};
