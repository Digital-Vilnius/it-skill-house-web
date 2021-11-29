import { createAction } from '@reduxjs/toolkit';
import { ContractorsFilter } from 'api/clients/contractors/types';
import { Sort, Paging } from 'api/types';

export const resetContractorsFilterAction = createAction<void>('resetContractorsFilter');
export const setContractorsFilterAction = createAction<{ filter: ContractorsFilter }>('setContractorsFilter');
export const setContractorsSortAction = createAction<{ sort: Sort }>('setContractorsSort');
export const setContractorsPagingAction = createAction<{ paging: Paging }>('setContractorsPaging');
