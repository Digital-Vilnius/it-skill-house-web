import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Paging, Sort } from 'api/types';
import { ContractorsFilter } from 'api/clients/contractors/types';
import { Contractor } from './types';
import { initialColumnsIds, initialColumnsOrder, initialPaging, initialSort } from './constants';
import { logoutAction } from 'features/auth/actions';

interface State {
  paging: Paging;
  sort: Sort;
  filter: ContractorsFilter;
  visibleColumnsIds: string[];
  columnsOrder: string[];
  selected: Contractor[];
}

const initialState: State = {
  filter: {},
  paging: initialPaging,
  sort: initialSort,
  visibleColumnsIds: initialColumnsIds,
  columnsOrder: initialColumnsOrder,
  selected: [],
};

const contractorsSlice = createSlice({
  name: 'contractors',
  initialState,
  reducers: {
    setPaging(state, action: PayloadAction<Paging>) {
      state.paging = action.payload;
      state.selected = [];
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    },
    setFilter(state, action: PayloadAction<ContractorsFilter>) {
      state.filter = action.payload;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    },
    resetFilter(state) {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
      state.selected = [];
    },
    setVisibleColumnsIds(state, action: PayloadAction<string[]>) {
      state.visibleColumnsIds = action.payload;
    },
    setColumnsOrder(state, action: PayloadAction<string[]>) {
      state.columnsOrder = action.payload;
    },
    setSelectedContractors(state, action: PayloadAction<Contractor[]>) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => initialState);
  },
});

export const {
  setPaging,
  setSort,
  setFilter,
  resetFilter,
  setVisibleColumnsIds,
  setColumnsOrder,
  setSelectedContractors,
} = contractorsSlice.actions;

export const { reducer } = contractorsSlice;
