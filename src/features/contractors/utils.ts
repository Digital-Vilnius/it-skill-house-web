import { Column } from 'components/DataTable';
import { Contractor, ContractorFieldValueType } from './types';
import { contractorColumns } from './columns';
import { Comparisons } from 'api/clients/contractors/types';

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

export const filterComparisonOptions = (valueType: ContractorFieldValueType): Comparisons[] => {
  if (valueType === 'date' || valueType === 'number') {
    return [
      Comparisons.greater,
      Comparisons.greaterOrEqual,
      Comparisons.equal,
      Comparisons.lessOrEqual,
      Comparisons.less,
    ];
  }

  if (valueType === 'string' || valueType === 'boolean') {
    return [Comparisons.equal];
  }

  if (valueType === 'array' || valueType === 'year') {
    return [Comparisons.notIn, Comparisons.in];
  }

  return [];
};
