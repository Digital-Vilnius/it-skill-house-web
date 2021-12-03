import React from 'react';

export interface Column<T> {
  id: string;
  label: string;
  sticky?: boolean;
  className?: string;
  sortable?: boolean;
  Header?: () => React.ReactElement;
  Cell?: (cell: T) => React.ReactElement | string;
}
