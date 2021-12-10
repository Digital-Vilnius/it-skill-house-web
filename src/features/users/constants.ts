import { Paging, Sort } from 'api/types';
import { SortDirections } from 'api/constants';

export enum UserKeys {
  id = 'id',
  fullName = 'fullName',
  email = 'email',
  phone = 'phone',
  lastLoginDate = 'lastLoginDate',
  created = 'created',
}

export const initialSort: Sort = { sortBy: UserKeys.created, sortDirection: SortDirections.desc };
export const initialPaging: Paging = { take: 15, skip: 0 };
