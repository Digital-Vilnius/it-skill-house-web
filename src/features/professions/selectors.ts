import { RootState } from 'core/store';
import { Profession } from 'api/clients/professions/types';

export const selectProfessions = (state: RootState): Profession[] => {
  return state.professions.professions;
};

export const selectProfessionsCount = (state: RootState): number => {
  return state.professions.professionsCount;
};

export const selectProfessionsLastUpdated = (state: RootState): number => {
  return state.professions.lastUpdated;
};
