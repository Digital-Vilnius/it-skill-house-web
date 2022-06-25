import { RootState } from 'core/store';

export const selectMsalAccessToken = (state: RootState): string | null => {
  return state.auth.msalAccessToken;
};

export const selectToken = (state: RootState): string | null => {
  return state.auth.token;
};

export const selectIsAuthenticated = (state: RootState): boolean => {
  return !!state.auth.token && !!selectMsalAccessToken(state);
};

export const selectIsLoggedIn = (state: RootState): boolean => {
  return !!state.profile.profile && selectIsAuthenticated(state);
};
