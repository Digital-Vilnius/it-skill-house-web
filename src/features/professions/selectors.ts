import { RootState } from 'core/store';
import { Profession } from 'api/clients/professions/types';
import { SelectOption } from 'api/types';

export const selectProfessions = (state: RootState): Profession[] => {
  return state.professions.professions;
};

export const selectProfessionsCount = (state: RootState): number => {
  return state.professions.professionsCount;
};

export const selectProfessionsLastUpdated = (state: RootState): number => {
  return state.professions.lastUpdated;
};

export const selectProfessionsOptions = (state: RootState): SelectOption<number>[] => {
  return selectProfessions(state).map((profession) => ({
    value: profession.id,
    label: profession.name,
  }));
};
