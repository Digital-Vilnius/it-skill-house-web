import { createSlice } from '@reduxjs/toolkit';
import {
  setFilterAction,
  setSortAction,
  setPagingAction,
  resetFilterAction,
  setColumnsIdsAction,
  setColumnsOrderAction,
  setSelectedAction,
} from './actions';
import { Contractor, ContractorsFilter } from './types';
import { Paging, Sort } from 'api/types';
import {
  initialColumnsIds,
  initialColumnsOrder,
  initialFilter,
  initialPaging,
  initialSort,
} from './constants';

interface State {
  paging: Paging;
  sort: Sort;
  filter: ContractorsFilter;
  columnsIds: string[];
  columnsOrder: string[];
  selected: Contractor[];
}

const initialState: State = {
  filter: initialFilter,
  paging: initialPaging,
  sort: initialSort,
  columnsIds: initialColumnsIds,
  columnsOrder: initialColumnsOrder,
  selected: [],
};

const contractorsSlice = createSlice({
  name: 'contractors',
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
    builder.addCase(setColumnsIdsAction, (state, action) => {
      state.columnsIds = action.payload.ids;
    });
    builder.addCase(setColumnsOrderAction, (state, action) => {
      state.columnsOrder = action.payload.ids;
    });
    builder.addCase(resetFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    });
    builder.addCase(setSelectedAction, (state, action) => {
      state.selected = action.payload.contractors;
    });
  },
});

export const { reducer } = contractorsSlice;
