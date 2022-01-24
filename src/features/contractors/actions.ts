import { createAction } from '@reduxjs/toolkit';
import { Contractor, ContractorsFilter } from './types';
import { Sort, Paging } from 'api/types';

export const resetFilterAction = createAction<void>('resetContractorsFilter');
export const setSortAction = createAction<{ sort: Sort }>('setContractorsSort');
export const setPagingAction = createAction<{ paging: Paging }>('setContractorsPaging');
export const setSelectedAction = createAction<{ contractors: Contractor[] }>('setSelectedContractors');
export const setColumnsIdsAction = createAction<{ ids: string[] }>('setContractorsColumnsIds');
export const setColumnsOrderAction = createAction<{ ids: string[] }>('setContractorsColumnsOrder');
export const setFilterAction = createAction<{ filter: ContractorsFilter }>('setContractorsFilter');
