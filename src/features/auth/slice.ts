import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction, refreshTokenAction } from './actions';

interface State {
  isLoading: boolean;
  isRefreshing: boolean;
  isLoggedIn: boolean;
  token: string | null;
  refreshToken: string | null;
}

const initialState: State = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  refreshToken: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshTokenAction.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshTokenAction.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(loginAction.rejected, () => initialState);
    builder.addCase(logoutAction, () => initialState);
    builder.addCase(refreshTokenAction.rejected, () => initialState);
  },
});

export const { reducer } = authSlice;
