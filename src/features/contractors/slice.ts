import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Paging, Sort } from 'api/types';
import { Contractor } from './types';
import { initialColumnsIds, initialColumnsOrder, initialPaging, initialSort } from './constants';
import { logout } from 'features/auth/slice';

interface State {
  paging: Paging;
  sort: Sort;
  visibleColumnsIds: string[];
  columnsOrder: string[];
  selected: Contractor[];
  lastUpdated: number;
}

const initialState: State = {
  paging: initialPaging,
  sort: initialSort,
  visibleColumnsIds: initialColumnsIds,
  columnsOrder: initialColumnsOrder,
  selected: [],
  lastUpdated: Date.now(),
};

const contractorsSlice = createSlice({
  name: 'contractors',
  initialState,
  reducers: {
    setPaging: (state, action: PayloadAction<Paging>) => {
      state.paging = action.payload;
      state.selected = [];
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
      state.paging = { ...state.paging, offset: 0 };
      state.selected = [];
    },
    setVisibleColumnsIds: (state, action: PayloadAction<string[]>) => {
      state.visibleColumnsIds = action.payload;
    },
    setColumnsOrder: (state, action: PayloadAction<string[]>) => {
      state.columnsOrder = action.payload;
    },
    setSelectedContractors: (state, action: PayloadAction<Contractor[]>) => {
      state.selected = action.payload;
    },
    updateLastUpdated: (state) => {
      state.lastUpdated = Date.now();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const {
  setPaging,
  setSort,
  setVisibleColumnsIds,
  setColumnsOrder,
  setSelectedContractors,
  updateLastUpdated,
} = contractorsSlice.actions;

export const { reducer } = contractorsSlice;
