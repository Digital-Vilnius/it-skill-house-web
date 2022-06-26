import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from 'features/auth/slice';
import { ListResponse } from 'api/types';
import { Recruiter } from 'api/clients/recruiters/types';

interface State {
  recruiters: Recruiter[];
  recruitersCount: number;
  lastUpdated: number;
}

const initialState: State = {
  recruiters: [],
  recruitersCount: 0,
  lastUpdated: Date.now(),
};

const recruitersSlice = createSlice({
  name: 'recruiters',
  initialState,
  reducers: {
    setRecruiters: (state, action: PayloadAction<ListResponse<Recruiter>>) => {
      state.recruiters = action.payload.result;
      state.recruitersCount = action.payload.count;
    },
    updateRecruiters: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setRecruiters, updateRecruiters } = recruitersSlice.actions;
export const { reducer } = recruitersSlice;
