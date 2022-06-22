import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from './types';
import { logout } from 'features/auth/slice';

interface State {
  profile: Profile | null;
}

const initialState: State = {
  profile: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<{ profile: Profile }>) {
      state.profile = action.payload.profile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setProfile } = profileSlice.actions;
export const { reducer } = profileSlice;
