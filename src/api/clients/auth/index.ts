import httpClient from '../../httpClient';
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from './types';

const baseUrl = '';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, LoginResponse>(`${baseUrl}/login`, request);
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  const formData = new FormData();
  formData.append('refreshToken', request.refreshToken);
  const headers = { 'Content-Type': 'multipart/form-data' };

  return httpClient.post<RefreshTokenRequest, RefreshTokenResponse>(
    `${baseUrl}/token/refresh`,
    formData,
    { headers }
  );
};
