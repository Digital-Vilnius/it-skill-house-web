import { createAction } from '@reduxjs/toolkit';
import { UsersFilter } from 'api/clients/users/types';
import { Sort, Paging } from 'api/types';

export const resetUsersFilterAction = createAction<void>('resetUsersFilter');
export const setUsersFilterAction = createAction<{ filter: UsersFilter }>('setUsersFilter');
export const setUsersSortAction = createAction<{ sort: Sort }>('setUsersSort');
export const setUsersPagingAction = createAction<{ paging: Paging }>('setUsersPaging');
