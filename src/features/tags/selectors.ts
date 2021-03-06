import { RootState } from 'core/store';
import { Tag } from 'api/clients/tags/types';
import { SelectOption } from 'api/types';

export const selectTags = (state: RootState): Tag[] => {
  return state.tags.tags;
};

export const selectTagsCount = (state: RootState): number => {
  return state.tags.tagsCount;
};

export const selectTagsLastUpdated = (state: RootState): number => {
  return state.tags.lastUpdated;
};

export const selectTagsOptions = (state: RootState): SelectOption<number>[] => {
  return selectTags(state).map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));
};
