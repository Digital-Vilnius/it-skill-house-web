import { createAction } from '@reduxjs/toolkit';
import { ContractorsFilter } from './types';
import { Sort, Paging } from 'api/types';

export const resetContractorsFilterAction = createAction<void>('resetContractorsFilter');
export const setContractorsSortAction = createAction<{ sort: Sort }>('setContractorsSort');
export const setContractorsPagingAction = createAction<{ paging: Paging }>('setContractorsPaging');

export const setContractorsColumnsIdsAction =
  createAction<{ ids: string[] }>('setContractorsColumnsIds');

export const setContractorsColumnsOrderAction = createAction<{ ids: string[] }>(
  'setContractorsColumnsOrder'
);

export const setContractorsFilterAction =
  createAction<{ filter: ContractorsFilter }>('setContractorsFilter');
