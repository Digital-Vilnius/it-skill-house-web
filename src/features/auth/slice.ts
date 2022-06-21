import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/clients/auth/types';

interface State {
  token: string | null;
  refreshToken: string | null;
  msalAccessToken: string | null;
}

const initialState: State = {
  token: null,
  refreshToken: null,
  msalAccessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<LoginResponse>) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    setMsalAccessToken(state, action: PayloadAction<{ msalAccessToken: string }>) {
      state.msalAccessToken = action.payload.msalAccessToken;
    },
    logout(state) {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setTokens, logout, setMsalAccessToken } = authSlice.actions;
export const { reducer } = authSlice;
