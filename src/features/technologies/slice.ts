import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from 'features/auth/slice';
import { ListResponse } from 'api/types';
import { Technology } from 'api/clients/technologies/types';

interface State {
  technologies: Technology[];
  technologiesCount: number;
  lastUpdated: number;
}

const initialState: State = {
  technologies: [],
  technologiesCount: 0,
  lastUpdated: Date.now(),
};

const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    setTechnologies: (state, action: PayloadAction<ListResponse<Technology>>) => {
      state.technologies = action.payload.result;
      state.technologiesCount = action.payload.count;
    },
    updateTechnologies: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setTechnologies, updateTechnologies } = technologiesSlice.actions;
export const { reducer } = technologiesSlice;
