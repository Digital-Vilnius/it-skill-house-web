import React, { FC } from 'react';
import { Dropdown, Form, Table } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import classNames from 'classnames';
import { Paging, Sort } from 'api/types';
import { SortDirections } from '../api/constants';
import { Pagination } from './index';
import xorBy from 'lodash/xorBy';
import { EventUtils } from 'utils';

export interface Column<T> {
  id: string;
  label: string;
  sticky?: boolean;
  className?: string;
  sortable?: boolean;
  Header?: () => React.ReactElement;
  Cell?: (cell: T) => React.ReactElement | string | null | undefined;
}

export interface Action<T> {
  label: string;
  onClick: (id: T) => void;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions?: Action<any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  onSort: (sort: Sort) => void;
  onPaging: (paging: Paging) => void;
  sort: Sort;
  paging: Paging;
  count: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedRows: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectedRowsChange: (rows: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowPress?: (id: any) => void;
}

const DataTable: FC<Props> = (props) => {
  const {
    columns,
    data,
    onSort,
    sort,
    actions,
    paging,
    onPaging,
    count,
    onSelectedRowsChange,
    selectedRows,
    onRowPress,
  } = props;

  const handleSort = (column: Column<unknown>) => {
    if (!column.sortable) return;

    const sortDirection =
      column.id != sort.sortBy
        ? SortDirections.desc
        : sort.sortDirection == SortDirections.asc
        ? SortDirections.desc
        : SortDirections.asc;
    onSort({ sortBy: column.id, sortDirection });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRowSelect = (row: any) => {
    const newSelectedRows = xorBy(selectedRows, [row], 'id');
    onSelectedRowsChange(newSelectedRows);
  };

  const handleSelectAll = () => {
    const newSelectedRows = data.length === selectedRows.length ? [] : data;
    onSelectedRowsChange(newSelectedRows);
  };

  return (
    <>
      <Table bordered className='table'>
        <thead>
          <tr>
            <th className='text-center'>
              <Form.Check
                onChange={handleSelectAll}
                checked={data.length === selectedRows.length}
                value='all'
                type='checkbox'
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.id}
                onClick={() => handleSort(column)}
                className={classNames(column.className, { 'is-sortable': column.sortable })}
              >
                {column.Header ? column.Header() : column.label}
              </th>
            ))}
            {!!actions && <th className='text-center'>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr onClick={() => onRowPress?.(item.id)} key={item.id}>
              <td onClick={EventUtils.stopPropagation} className='text-center'>
                <Form.Check
                  checked={!!selectedRows.find((row) => item.id === row.id)}
                  onChange={() => handleRowSelect(item)}
                  type='checkbox'
                />
              </td>
              {columns.map((cell, index) => (
                <td key={index} className={cell.className}>
                  {cell.Cell ? cell.Cell(item) : item[cell.id]}
                </td>
              ))}
              {!!actions && (
                <td onClick={EventUtils.stopPropagation} className='text-center'>
                  <Dropdown align='end'>
                    <Dropdown.Toggle as='span' className='dropdown-ellipses' role='button'>
                      <Icon name='more-vertical' size='17' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {actions.map((action, index) => (
                        <Dropdown.Item key={index} onClick={() => action.onClick(item.id)}>
                          {action.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination paging={paging} count={count} onChange={onPaging} />
    </>
  );
};

export default DataTable;
