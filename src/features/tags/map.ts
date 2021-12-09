import { Tag as ApiTag } from 'api/clients/tags/types';
import { Tag } from './types';
import { Option } from 'components/Select/types';

export const mapTag = (tag: ApiTag): Tag => tag;

export const mapTagOption = (tag: Tag): Option => ({
  value: tag.id,
  label: tag.name,
});
