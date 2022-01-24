import { createSlice } from '@reduxjs/toolkit';
import {
  setFilterAction,
  setPagingAction,
  setSortAction,
  resetFilterAction,
  setSelectedAction,
} from './actions';
import { RecruitersFilter } from 'api/clients/recruiters/types';
import { Paging, Sort } from 'api/types';
import { initialPaging, initialSort } from './constants';
import { Recruiter } from './types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: RecruitersFilter;
  selected: Recruiter[];
}

const initialState: State = {
  filter: {},
  paging: initialPaging,
  sort: initialSort,
  selected: [],
};

const recruitersSlice = createSlice({
  name: 'recruiters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPagingAction, (state, action) => {
      state.paging = action.payload.paging;
      state.selected = [];
    });
    builder.addCase(setSortAction, (state, action) => {
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    });
    builder.addCase(setFilterAction, (state, action) => {
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    });
    builder.addCase(resetFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    });
    builder.addCase(setSelectedAction, (state, action) => {
      state.selected = action.payload.recruiters;
    });
  },
});

export const { reducer } = recruitersSlice;
