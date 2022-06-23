import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from 'api/clients';
import { RefreshTokenRequest, RefreshTokenResponse } from 'api/clients/auth/types';

export const refreshTokenAction = createAsyncThunk<RefreshTokenResponse, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    return AuthClient.refreshToken(request);
  }
);
