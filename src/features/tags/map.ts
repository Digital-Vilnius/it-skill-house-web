import { Tag as ApiTag } from 'api/clients/tags/types';
import { Tag } from './types';
import { SelectOption } from 'components/Select';

export const mapTag = (tag: ApiTag): Tag => tag;

export const mapTagOption = (tag: Tag): SelectOption => ({
  value: tag.id,
  label: tag.name,
  count: tag.count,
});
