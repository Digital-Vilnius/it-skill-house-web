import { createAction } from '@reduxjs/toolkit';
import { TransactionsFilter } from 'api/clients/transactions/types';
import { Sort, Paging } from 'api/types';

export const resetTransactionsFilterAction = createAction<void>('resetTransactionsFilter');
export const setTransactionsFilterAction = createAction<{ filter: TransactionsFilter }>('setTransactionsFilter');
export const setTransactionsSortAction = createAction<{ sort: Sort }>('setTransactionsSort');
export const setTransactionsPagingAction = createAction<{ paging: Paging }>('setTransactionsPaging');
