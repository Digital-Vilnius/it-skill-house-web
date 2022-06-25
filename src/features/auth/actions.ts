import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from 'api/clients';
import { RefreshTokenRequest, RefreshTokenResponse } from 'api/clients/auth/types';
import msalInstance from 'core/msal';
import { authRequest } from 'core/msal/constants';
import { AcquireTokenSilentResponse } from './types';

export const refreshTokenAction = createAsyncThunk<RefreshTokenResponse, RefreshTokenRequest>(
  'refreshToken',
  async (request: RefreshTokenRequest) => {
    return AuthClient.refreshToken(request);
  }
);

export const refreshMsalAccessTokenAction = createAsyncThunk<AcquireTokenSilentResponse>(
  'refreshMsalAccessToken',
  async () => {
    return msalInstance.acquireTokenSilent(authRequest);
  }
);
