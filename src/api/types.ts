import { SortDirections } from './constants';

export interface ListRequest<T = undefined> {
  sort?: Sort;
  filter?: T;
  paging?: Paging;
}

export interface ListResponse<T> extends ResultResponse<T[]> {
  count: number;
}

export interface Sort {
  sortBy: string;
  sortDirection: SortDirections;
}

export interface Paging {
  limit: number;
  offset: number;
}

export interface ResultResponse<T> {
  result: T;
}

export interface BaseModel {
  id: number;
  created: string;
  updated: string | null;
}

export interface SelectOption<T> {
  value: T;
  label: string;
}
