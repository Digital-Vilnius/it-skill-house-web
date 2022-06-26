import { Tag } from 'api/clients/tags/types';

export const tagToString = (tag: Tag | undefined): string => {
  return tag?.name ?? 'Unknown';
};
