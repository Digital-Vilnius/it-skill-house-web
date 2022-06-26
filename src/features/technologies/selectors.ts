import { RootState } from 'core/store';
import { Technology } from 'api/clients/technologies/types';
import { SelectOption } from 'api/types';

export const selectTechnologies = (state: RootState): Technology[] => {
  return state.technologies.technologies;
};

export const selectTechnologiesCount = (state: RootState): number => {
  return state.technologies.technologiesCount;
};

export const selectTechnologiesLastUpdated = (state: RootState): number => {
  return state.technologies.lastUpdated;
};

export const selectTechnologiesOptions = (state: RootState): SelectOption<number>[] => {
  return selectTechnologies(state).map((technology) => ({
    value: technology.id,
    label: technology.name,
  }));
};
