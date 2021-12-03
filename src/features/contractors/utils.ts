import { Column } from 'components/DataTable';
import { Contractor } from './types';
import { contractorColumns } from './constants';

export const getAllColumns = (order: string[]) => {
  const orderedColumns: Column<Contractor>[] = [];

  order.forEach((id) => {
    const nextColumn = contractorColumns.find((column) => column.id === id);
    if (nextColumn) orderedColumns.push(nextColumn);
  });

  const notOrderedColumns = contractorColumns.filter((column) => !order.includes(column.id));

  return [...orderedColumns, ...notOrderedColumns];
};

export const getVisibleColumns = (columns: Column<Contractor>[], columnsIds: string[]) => {
  return columns.filter((column) => columnsIds.includes(column.id) || column.sticky);
};
