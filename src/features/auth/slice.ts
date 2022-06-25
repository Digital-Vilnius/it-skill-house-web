import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/clients/auth/types';
import { refreshMsalAccessTokenAction, refreshTokenAction } from './actions';

interface State {
  token: string | null;
  refreshToken: string | null;
  msalAccessToken: string | null;
  isRefreshing: boolean;
  isMsalRefreshing: boolean;
}

const initialState: State = {
  token: null,
  refreshToken: null,
  msalAccessToken: null,
  isRefreshing: false,
  isMsalRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    setMsalAccessToken: (state, action: PayloadAction<{ msalAccessToken: string }>) => {
      state.msalAccessToken = action.payload.msalAccessToken;
    },
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(refreshTokenAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokenAction.rejected, (state) => {
      state.isRefreshing = false;
    });
    builder.addCase(refreshMsalAccessTokenAction.pending, (state) => {
      state.isMsalRefreshing = true;
    });
    builder.addCase(refreshMsalAccessTokenAction.fulfilled, (state, action) => {
      state.isMsalRefreshing = false;
      state.msalAccessToken = action.payload.accessToken;
    });
    builder.addCase(refreshMsalAccessTokenAction.rejected, (state) => {
      state.isMsalRefreshing = false;
    });
  },
});

export const { setTokens, logout, setMsalAccessToken } = authSlice.actions;
export const { reducer } = authSlice;
