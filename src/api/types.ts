export type SortDirection = 'asc' | 'desc';

export interface ListRequest<T = undefined> {
  sort?: Sort;
  filter?: T;
  paging?: Paging;
}

export interface ListResponse<T> extends ResultResponse<T[]> {
  total: number;
}

export interface Sort {
  column: string;
  direction: SortDirection;
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
