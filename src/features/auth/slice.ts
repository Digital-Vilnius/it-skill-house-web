import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from 'api/clients/auth/types';

interface State {
  token: string | null;
  refreshToken: string | null;
}

const initialState: State = {
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<LoginResponse>) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { setTokens, logout } = authSlice.actions;
export const { reducer } = authSlice;
