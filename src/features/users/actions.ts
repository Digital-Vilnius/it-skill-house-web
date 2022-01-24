import { createAction } from '@reduxjs/toolkit';
import { UsersFilter } from 'api/clients/users/types';
import { Sort, Paging } from 'api/types';
import { User } from './types';

export const resetFilterAction = createAction<void>('resetUsersFilter');
export const setFilterAction = createAction<{ filter: UsersFilter }>('setUsersFilter');
export const setSortAction = createAction<{ sort: Sort }>('setUsersSort');
export const setPagingAction = createAction<{ paging: Paging }>('setUsersPaging');
export const setSelectedAction = createAction<{ users: User[] }>('setSelectedUsersIds');
