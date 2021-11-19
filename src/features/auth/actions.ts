import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { AuthClient } from 'api/clients';
import { LoginRequest, RegistrationRequest, AuthResponse, RefreshTokenRequest } from 'api/clients/auth/types';

export const loginAction = createAsyncThunk<AuthResponse, LoginRequest>('login', async (request: LoginRequest) => {
  return AuthClient.login(request);
});

export const registerAction = createAsyncThunk<AuthResponse, RegistrationRequest>('register', async (request: RegistrationRequest) => {
  return AuthClient.register(request);
});

export const refreshTokenAction = createAsyncThunk<AuthResponse, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    return AuthClient.refreshToken(request);
  }
);

export const logoutAction = createAction<void>('logout');
