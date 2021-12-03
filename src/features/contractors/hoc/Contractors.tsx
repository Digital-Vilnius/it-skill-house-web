import React, { FC, useEffect, useState } from 'react';
import { useContractors, useContractorsColumns } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { ColumnsSelect } from '../components';
import { getAllColumns, getVisibleColumns } from '../utils';
import { Column } from 'components/DataTable';
import { Contractor } from '../types';
import { DataTable, Pagination } from 'components';
import { Paging } from 'api/types';
import { setContractorsPagingAction } from '../actions';
import { Card, Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';

const Contractors: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, count } = useContractors({ filter, paging, sort });

  const { setColumnsIds, columnsIds, setColumnsOrder, columnsOrder } = useContractorsColumns();
  const [allColumns, setAllColumns] = useState<Column<Contractor>[]>(getAllColumns(columnsOrder));
  const [visibleColumns, setVisibleColumns] = useState<Column<Contractor>[]>(
    getVisibleColumns(allColumns, columnsIds)
  );

  useEffect(() => {
    setAllColumns(getAllColumns(columnsOrder));
  }, [columnsOrder]);

  useEffect(() => {
    setVisibleColumns(getVisibleColumns(allColumns, columnsIds));
  }, [allColumns, columnsIds]);

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setContractorsPagingAction({ paging: newPaging }));
  };

  return (
    <Card>
      <Card.Header>
        <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
          <Form.Control type='search' placeholder='Search' />
          <InputGroup.Text>
            <Icon name='search' size={16} />
          </InputGroup.Text>
        </InputGroup>
        <ColumnsSelect
          order={columnsOrder}
          onOrderChange={setColumnsOrder}
          onChange={setColumnsIds}
          columns={getAllColumns(columnsOrder)}
          value={visibleColumns.map((column) => column.id)}
        />
      </Card.Header>
      <DataTable columns={visibleColumns} data={contractors} />
      <Card.Footer className='d-flex justify-content-between'>
        <Pagination paging={paging} count={count} onChange={handlePagingChange} />
      </Card.Footer>
    </Card>
  );
};

export default Contractors;
