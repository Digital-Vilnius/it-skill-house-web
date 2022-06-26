import { RootState } from 'core/store';
import { ContractorsFilter, ContractorsFilterRule } from 'api/clients/contractors/types';

export const selectContractorFilterRules = (state: RootState): ContractorsFilterRule[] => {
  return state.filter.rules;
};

export const selectContractorsFilter = (state: RootState): ContractorsFilter => {
  return { rules: selectContractorFilterRules(state) };
};
