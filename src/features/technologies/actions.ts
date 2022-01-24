import { createAction } from '@reduxjs/toolkit';
import { Sort, Paging } from 'api/types';
import { TechnologiesFilter } from 'api/clients/technologies/types';
import { Technology } from './types';

export const resetFilterAction = createAction<void>('resetTechnologiesFilter');
export const setFilterAction = createAction<{ filter: TechnologiesFilter }>('setTechnologiesFilter');
export const setSortAction = createAction<{ sort: Sort }>('setTechnologiesSort');
export const setPagingAction = createAction<{ paging: Paging }>('setTechnologiesPaging');
export const setSelectedAction = createAction<{ technologies: Technology[] }>('setSelectedTechnologies');
