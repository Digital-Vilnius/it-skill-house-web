import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';

export enum RecruiterKeys {
  id = 'id',
  fullName = 'fullName',
  email = 'email',
  phone = 'phone',
  updated = 'updated',
  created = 'created',
}

export const initialSort: Sort = { sortBy: RecruiterKeys.created, sortDirection: SortDirections.desc };
export const initialPaging: Paging = { take: 15, skip: 0 };
