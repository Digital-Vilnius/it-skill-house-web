import React, { FC } from 'react';
import { Dropdown, Form, Table } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import classNames from 'classnames';
import { Sort } from 'api/types';

export interface Column<T> {
  id: string;
  label: string;
  sticky?: boolean;
  className?: string;
  sortable?: boolean;
  Header?: () => React.ReactElement;
  Cell?: (cell: T) => React.ReactElement | string | null;
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
  sort: Sort;
}

const DataTable: FC<Props> = (props) => {
  const { columns, data, onSort, sort, actions } = props;

  const handleSort = (column: Column<unknown>) => {
    if (!column.sortable) return;

    const sortDirection =
      column.id != sort.sortBy ? 'desc' : sort.sortDirection == 'asc' ? 'desc' : 'asc';
    onSort({ sortBy: column.id, sortDirection });
  };

  return (
    <Table size='sm' className='card-table table-nowrap'>
      <thead>
        <tr>
          <th className='text-center'>
            <Form.Check value='all' type='checkbox' />
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
          <tr key={item.id}>
            <td className='text-center'>
              <Form.Check type='checkbox' />
            </td>
            {columns.map((cell, index) => (
              <td key={index} className={cell.className}>
                {cell.Cell ? cell.Cell(item) : item[cell.id]}
              </td>
            ))}
            {!!actions && (
              <td className='text-center'>
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
  );
};

export default DataTable;
