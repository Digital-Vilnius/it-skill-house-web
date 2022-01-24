import { createSlice } from '@reduxjs/toolkit';
import {
  setFilterAction,
  setPagingAction,
  setSortAction,
  resetFilterAction,
  setSelectedAction,
} from './actions';
import { Paging, Sort } from 'api/types';
import { initialPaging, initialSort } from './constants';
import { TechnologiesFilter } from 'api/clients/technologies/types';
import { Technology } from './types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: TechnologiesFilter;
  selected: Technology[];
}

const initialState: State = {
  filter: {},
  paging: initialPaging,
  sort: initialSort,
  selected: [],
};

const technologiesSlice = createSlice({
  name: 'technologies',
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
      state.selected = action.payload.technologies;
    });
  },
});

export const { reducer } = technologiesSlice;
