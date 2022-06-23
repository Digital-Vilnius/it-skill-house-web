import httpClient from '../../httpClient';
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from './types';

const baseUrl = '';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, LoginResponse>(`${baseUrl}/login`, request);
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  return httpClient.post<RefreshTokenRequest, RefreshTokenResponse>(
    `${baseUrl}/token/refresh`,
    request
  );
};
