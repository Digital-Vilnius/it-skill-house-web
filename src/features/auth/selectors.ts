import { RootState } from 'core/store';

export const selectIsAuthenticated = (state: RootState): boolean => {
  return !!state.auth.token;
};

export const selectIsLoggedIn = (state: RootState): boolean => {
  return !!state.profile.profile && selectIsAuthenticated(state);
};
