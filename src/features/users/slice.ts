import { createSlice } from '@reduxjs/toolkit';
import {
  setFilterAction,
  setPagingAction,
  setSortAction,
  resetFilterAction,
  setSelectedAction,
} from './actions';
import { UsersFilter } from 'api/clients/users/types';
import { Paging, Sort } from 'api/types';
import { initialPaging, initialSort } from './constants';
import { User } from './types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: UsersFilter;
  selected: User[];
}

const initialState: State = {
  filter: {},
  paging: initialPaging,
  sort: initialSort,
  selected: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPagingAction, (state, action) => {
      state.selected = [];
      state.paging = action.payload.paging;
    });
    builder.addCase(setSortAction, (state, action) => {
      state.selected = [];
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setFilterAction, (state, action) => {
      state.selected = [];
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(resetFilterAction, (state) => {
      state.selected = [];
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setSelectedAction, (state, action) => {
      state.selected = action.payload.users;
    });
  },
});

export const { reducer } = usersSlice;
