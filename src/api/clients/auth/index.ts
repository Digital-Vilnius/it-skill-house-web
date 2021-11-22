import httpClient from '../../httpClient';
import { AuthResponse, LoginRequest, RegistrationRequest, RefreshTokenRequest } from './types';

const baseUrl = '/auth';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, AuthResponse>(baseUrl, request);
};

export const refreshToken = async (request: RefreshTokenRequest) => {
  return httpClient.post<LoginRequest, AuthResponse>(baseUrl, request);
};

export const register = async (request: RegistrationRequest) => {
  return httpClient.post<RegistrationRequest, AuthResponse>(baseUrl, request);
};
