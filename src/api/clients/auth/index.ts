import httpClient from '../../httpClient';
import { AuthResponse, LoginRequest, RegistrationRequest, RefreshTokenRequest } from './types';

const baseUrl = '/auth';

export const login = async (request: LoginRequest): Promise<AuthResponse> => {
  return httpClient.post<LoginRequest, AuthResponse>(baseUrl, request);
};

export const refreshToken = async (request: RefreshTokenRequest): Promise<AuthResponse> => {
  return httpClient.post<LoginRequest, AuthResponse>(baseUrl, request);
};

export const register = async (request: RegistrationRequest): Promise<AuthResponse> => {
  return httpClient.post<RegistrationRequest, AuthResponse>(baseUrl, request);
};
