import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContractorsFilter, ContractorsFilterRule } from 'api/clients/contractors/types';
import { logout } from 'features/auth/slice';

interface State {
  rules: ContractorsFilterRule[];
}

const initialState: State = {
  rules: [],
};

const contractorsFilterSlice = createSlice({
  name: 'contractorsFilter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: ContractorsFilter }>) => {
      state.rules = action.payload.filter.rules;
    },
    resetFilter: (state) => {
      state.rules = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setFilter, resetFilter } = contractorsFilterSlice.actions;
export const { reducer } = contractorsFilterSlice;
