import { createSlice } from '@reduxjs/toolkit';
import {
  setTransactionsFilterAction,
  setTransactionsPagingAction,
  setTransactionsSortAction,
  resetTransactionsFilterAction,
} from './actions';
import { TransactionsFilter } from 'api/clients/transactions/types';
import { Paging, Sort } from 'api/types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: TransactionsFilter;
}

const initialState: State = {
  filter: {},
  paging: { take: 15, skip: 0 },
  sort: { column: 'created', direction: 'desc' },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTransactionsPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(setTransactionsSortAction, (state, action) => {
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setTransactionsFilterAction, (state, action) => {
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(resetTransactionsFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
  },
});

export const { reducer } = transactionsSlice;
