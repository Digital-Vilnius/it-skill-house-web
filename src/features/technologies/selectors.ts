import { RootState } from 'core/store';
import { Technology } from 'api/clients/technologies/types';
import { SelectOption } from 'components/Select';

export const selectTechnologies = (state: RootState): Technology[] => {
  return state.technologies.technologies;
};

export const selectTechnologiesCount = (state: RootState): number => {
  return state.technologies.technologiesCount;
};

export const selectTechnologiesLastUpdated = (state: RootState): number => {
  return state.technologies.lastUpdated;
};

export const selectTechnologiesOptions = (state: RootState): SelectOption[] => {
  return selectTechnologies(state).map((technology) => ({
    value: technology.id,
    label: technology.name,
  }));
};
