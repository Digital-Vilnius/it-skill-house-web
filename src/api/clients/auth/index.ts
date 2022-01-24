import httpClient from '../../httpClient';
import { AuthResponse, LoginRequest, RegistrationRequest, RefreshTokenRequest } from './types';
import { ResultResponse } from '../../types';

const baseUrl = '/authentication';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, ResultResponse<AuthResponse>>(`${baseUrl}/login`, request);
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  return httpClient.post<LoginRequest, ResultResponse<AuthResponse>>(
    `${baseUrl}/refresh-token`,
    request
  );
};

export const register = async (request: RegistrationRequest) => {
  return httpClient.post<RegistrationRequest, ResultResponse<AuthResponse>>(
    `${baseUrl}/register`,
    request
  );
};
