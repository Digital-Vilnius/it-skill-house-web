import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/clients/auth/types';
import { refreshTokenAction } from './actions';

interface State {
  token: string | null;
  refreshToken: string | null;
  msalAccessToken: string | null;
  isRefreshing: boolean;
}

const initialState: State = {
  token: null,
  refreshToken: null,
  msalAccessToken: null,
  isRefreshing: false,
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
  },
});

export const { setTokens, logout, setMsalAccessToken } = authSlice.actions;
export const { reducer } = authSlice;
