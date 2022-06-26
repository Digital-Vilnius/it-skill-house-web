import { RootState } from 'core/store';
import { Tag } from 'api/clients/tags/types';

export const selectTags = (state: RootState): Tag[] => {
  return state.tags.tags;
};

export const selectTagsCount = (state: RootState): number => {
  return state.tags.tagsCount;
};

export const selectTagsLastUpdated = (state: RootState): number => {
  return state.tags.lastUpdated;
};
