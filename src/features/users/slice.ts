import { createSlice } from '@reduxjs/toolkit';
import {
  setUsersFilterAction,
  setUsersPagingAction,
  setUsersSortAction,
  resetUsersFilterAction,
} from './actions';
import { UsersFilter } from 'api/clients/users/types';
import { Paging, Sort } from 'api/types';
import { initialPaging, initialSort } from './constants';

interface State {
  paging: Paging;
  sort: Sort;
  filter: UsersFilter;
}

const initialState: State = {
  filter: {},
  paging: initialPaging,
  sort: initialSort,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsersPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(setUsersSortAction, (state, action) => {
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setUsersFilterAction, (state, action) => {
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(resetUsersFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
  },
});

export const { reducer } = usersSlice;
