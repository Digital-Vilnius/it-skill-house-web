import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';

export enum TechnologyKeys {
  id = 'id',
  name = 'name',
  count = 'count',
  updated = 'updated',
  created = 'created',
}

export const initialSort: Sort = {
  sortBy: TechnologyKeys.created,
  sortDirection: SortDirections.desc,
};

export const initialPaging: Paging = { take: 15, skip: 0 };
