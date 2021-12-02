import React, { FC } from 'react';
import { Card, Dropdown, Form, InputGroup, Table } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import { Column } from './types';

interface Props {
  columns: Column<any>[];
  data: any[];
}

const DataTable: FC<Props> = (props) => {
  const { columns, data } = props;

  return (
    <Card>
      <Card.Header>
        <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
          <Form.Control type='search' placeholder='Search' />
          <InputGroup.Text>
            <Icon name='search' size={16} />
          </InputGroup.Text>
        </InputGroup>
      </Card.Header>
      <Table size='sm' className='card-table table-nowrap'>
        <thead>
          <tr>
            <th className='text-center'>
              <Form.Check value='all' type='checkbox' />
            </th>
            {columns.map((column) => (
              <th key={column.id} className={column.className}>
                {column.Header ? column.Header() : column.label}
              </th>
            ))}
            <th className='text-center'>Actions</th>
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
              <td className='text-center'>
                <Dropdown align='end'>
                  <Dropdown.Toggle as='span' className='dropdown-ellipses' role='button'>
                    <Icon name='more-vertical' size='17' />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href='#!'>Action</Dropdown.Item>
                    <Dropdown.Item href='#!'>Another action</Dropdown.Item>
                    <Dropdown.Item href='#!'>Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default DataTable;
