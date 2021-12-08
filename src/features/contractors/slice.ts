import { createSlice } from '@reduxjs/toolkit';
import {
  setContractorsFilterAction,
  setContractorsSortAction,
  setContractorsPagingAction,
  resetContractorsFilterAction,
  setContractorsColumnsIdsAction,
  setContractorsColumnsOrderAction,
} from './actions';
import { ContractorsFilter } from './types';
import { Paging, Sort } from 'api/types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: ContractorsFilter;
  columnsIds: string[];
  columnsOrder: string[];
}

const initialFilter: ContractorsFilter = {
  rateFrom: null,
  rateTo: null,
  availableFrom: null,
  availableTo: null,
  keyword: null,
  technologiesIds: [],
  recruitersIds: [],
  isPublic: null,
  isRemote: null,
  isAvailable: null,
};

const initialColumnsOrder: string[] = [
  'id',
  'fullName',
  'email',
  'phone',
  'firstName',
  'lastName',
  'recruiter',
  'availableFrom',
  'location',
  'isRemote',
  'isPublic',
  'rate',
  'updated',
  'created',
];

const initialColumnsIds: string[] = [
  'fullName',
  'email',
  'phone',
  'recruiter',
  'availableFrom',
  'location',
  'isRemote',
  'isPublic',
  'rate',
  'created',
];

const initialPaging: Paging = { take: 15, skip: 0 };
const initialSort: Sort = { sortBy: 'created', sortDirection: 'desc' };

const initialState: State = {
  filter: initialFilter,
  paging: initialPaging,
  sort: initialSort,
  columnsIds: initialColumnsIds,
  columnsOrder: initialColumnsOrder,
};

const contractorsSlice = createSlice({
  name: 'contractors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setContractorsPagingAction, (state, action) => {
      state.paging = action.payload.paging;
    });
    builder.addCase(setContractorsSortAction, (state, action) => {
      state.sort = action.payload.sort;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setContractorsFilterAction, (state, action) => {
      state.filter = action.payload.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
    builder.addCase(setContractorsColumnsIdsAction, (state, action) => {
      state.columnsIds = action.payload.ids;
    });
    builder.addCase(setContractorsColumnsOrderAction, (state, action) => {
      state.columnsOrder = action.payload.ids;
    });
    builder.addCase(resetContractorsFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
  },
});

export const { reducer } = contractorsSlice;
