import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from 'features/auth/slice';
import { ListResponse } from 'api/types';
import { Profession } from 'api/clients/professions/types';

interface State {
  professions: Profession[];
  professionsCount: number;
  lastUpdated: number;
}

const initialState: State = {
  professions: [],
  professionsCount: 0,
  lastUpdated: Date.now(),
};

const professionsSlice = createSlice({
  name: 'professions',
  initialState,
  reducers: {
    setProfessions: (state, action: PayloadAction<ListResponse<Profession>>) => {
      state.professions = action.payload.result;
      state.professionsCount = action.payload.count;
    },
    updateProfessions: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setProfessions, updateProfessions } = professionsSlice.actions;
export const { reducer } = professionsSlice;
