import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useContractors, useContractorsColumns } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { ColumnsSelect } from '../components';
import { getAllColumns, getVisibleColumns } from '../utils';
import { Column } from 'components/DataTable';
import { Contractor } from '../types';
import { DataTable, Pagination } from 'components';
import { Paging, Sort } from 'api/types';
import {
  setContractorsFilterAction,
  setContractorsPagingAction,
  setContractorsSortAction,
} from '../actions';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import ContractorsFilter from './ContractorsFilter';

const Contractors: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, count } = useContractors({ filter, paging, sort });
  const [filterVisible, setFilterVisible] = useState<boolean>(false);

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

  const handleSortChange = (newSort: Sort) => {
    dispatch(setContractorsSortAction({ sort: newSort }));
  };

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = { ...filter, keyword: event.target.value };
    dispatch(setContractorsFilterAction({ filter: newFilter }));
  };

  return (
    <div>
      <ContractorsFilter
        onClose={() => setFilterVisible(false)}
        visible={filterVisible}
        filter={filter}
      />
      <Card>
        <Card.Header>
          <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
            <Form.Control
              value={filter.keyword}
              onChange={handleKeywordChange}
              type='search'
              placeholder='Search'
            />
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
          <Button onClick={() => setFilterVisible(true)} className='ms-2' size='sm'>
            Filter
          </Button>
        </Card.Header>
        <DataTable
          onSort={handleSortChange}
          sort={sort}
          columns={visibleColumns}
          data={contractors}
        />
        <Card.Footer className='d-flex justify-content-between'>
          <Pagination paging={paging} count={count} onChange={handlePagingChange} />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Contractors;
