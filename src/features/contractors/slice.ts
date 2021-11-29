import { createSlice } from '@reduxjs/toolkit';
import { setContractorsFilterAction, setContractorsSortAction, setContractorsPagingAction, resetContractorsFilterAction } from './actions';
import { ContractorsFilter } from 'api/clients/contractors/types';
import { Paging, Sort } from 'api/types';

interface State {
  paging: Paging;
  sort: Sort;
  filter: ContractorsFilter;
}

const initialState: State = {
  filter: {},
  paging: { take: 15, skip: 0 },
  sort: { column: 'created', direction: 'desc' },
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
    builder.addCase(resetContractorsFilterAction, (state) => {
      state.filter = initialState.filter;
      state.paging = { ...state.paging, skip: 0 };
    });
  },
});

export const { reducer } = contractorsSlice;
