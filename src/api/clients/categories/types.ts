export interface Category {
  id: string;
  name: string;
  updated?: string;
  created: string;
}

export interface AddCategoryRequest {
  name: string;
}

export interface EditCategoryRequest {
  name: string;
}
