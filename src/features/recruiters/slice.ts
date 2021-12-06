import { createSlice } from '@reduxjs/toolkit';
import {
  setRecruitersFilterAction,
  setRecruitersPagingAction,
  setRecruitersSortAction,
  resetRecruitersFilterAction,
} from './actions';
import { RecruitersFilter } from 'api/clients/recruiters/types';
import { Paging, Sort } from 'api/types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: RecruitersFilter;
}

const initialState: State = {
  filter: {},
  paging: { take: 15, skip: 0 },
  sort: { sortBy: 'created', sortDirection: 'desc' },
};

const recruitersSlice = createSlice({
  name: 'recruiters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setRecruitersPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(setRecruitersSortAction, (state, action) => {
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setRecruitersFilterAction, (state, action) => {
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(resetRecruitersFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
  },
});

export const { reducer } = recruitersSlice;
