import { RootState } from 'core/store';
import { Profile } from './types';

export const selectProfile = (state: RootState): Profile | null => {
  return state.profile.profile;
};
