import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { AuthClient } from 'api/clients';
import {
  LoginRequest,
  RegistrationRequest,
  AuthResponse,
  RefreshTokenRequest,
} from 'api/clients/auth/types';

export const loginAction = createAsyncThunk<AuthResponse, LoginRequest>(
  'login',
  async (request: LoginRequest) => {
    const response = await AuthClient.login(request);
    return response.result;
  }
);

export const registerAction = createAsyncThunk<AuthResponse, RegistrationRequest>(
  'register',
  async (request: RegistrationRequest) => {
    const response = await AuthClient.register(request);
    return response.result;
  }
);

export const refreshTokenAction = createAsyncThunk<AuthResponse, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    const response = await AuthClient.refreshToken(request);
    return response.result;
  }
);

export const logoutAction = createAction<void>('logout');
