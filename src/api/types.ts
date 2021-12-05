export type SortDirection = 'asc' | 'desc';

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
  sortDirection: SortDirection;
}

export interface Paging {
  take: number;
  skip: number;
}

export interface ResultResponse<T> {
  result: T;
}

export interface BaseModel {
  id: string;
  created: string;
  updated: string | null;
}
