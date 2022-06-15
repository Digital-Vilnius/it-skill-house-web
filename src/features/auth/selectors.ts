import { RootState } from 'core/store';

export const selectIsLoggedIn = (state: RootState): boolean => {
  return !!state.auth.token;
};
