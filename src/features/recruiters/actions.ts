import { createAction } from '@reduxjs/toolkit';
import { RecruitersFilter } from 'api/clients/recruiters/types';
import { Sort, Paging } from 'api/types';

export const resetRecruitersFilterAction = createAction<void>('resetRecruitersFilter');
export const setRecruitersFilterAction = createAction<{ filter: RecruitersFilter }>('setRecruitersFilter');
export const setRecruitersSortAction = createAction<{ sort: Sort }>('setRecruitersSort');
export const setRecruitersPagingAction = createAction<{ paging: Paging }>('setRecruitersPaging');
