import { createAction } from '@reduxjs/toolkit';
import { RecruitersFilter } from 'api/clients/recruiters/types';
import { Sort, Paging } from 'api/types';
import { Recruiter } from './types';

export const resetFilterAction = createAction<void>('resetRecruitersFilter');
export const setSortAction = createAction<{ sort: Sort }>('setRecruitersSort');
export const setPagingAction = createAction<{ paging: Paging }>('setRecruitersPaging');
export const setSelectedAction = createAction<{ recruiters: Recruiter[] }>('setSelectedRecruiters');
export const setFilterAction = createAction<{ filter: RecruitersFilter }>('setRecruitersFilter');
