import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useContractors, useContractorsColumns } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { ColumnsSelect } from '../components';
import { getAllColumns, getVisibleColumns } from '../utils';
import { Action, Column } from 'components/DataTable';
import { Contractor } from '../types';
import { DataTable } from 'components';
import { Paging, Sort } from 'api/types';
import {
  setContractorsFilterAction,
  setContractorsPagingAction,
  setContractorsSortAction,
} from '../actions';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import ContractorsFilter from './ContractorsFilter';
import { useNavigate } from 'react-router-dom';
import ContractorForm from './ContractorForm';
import { EventForm } from '../../events/hoc';

const Contractors: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, count } = useContractors({ filter, paging, sort });
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [editableId, setEditableId] = useState<number | undefined>();
  const [contractorId, setContractorId] = useState<number | undefined>();

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

  const handleOnFormClose = () => {
    setEditableId(undefined);
    setFormVisible(false);
  };

  const getActions = (): Action<number>[] => {
    return [
      { label: 'Add event', onClick: (id) => setContractorId(id) },
      { label: 'Edit', onClick: (id) => setEditableId(id) },
      { label: 'Details', onClick: (id) => navigate(`/admin/contractors/${id}`) },
      { label: 'Delete', onClick: (id) => navigate(`/admin/contractors/${id}`) },
    ];
  };

  return (
    <>
      <div className='header mt-md-5'>
        <div className='header-body'>
          <Row className='align-items-center'>
            <Col>
              <h6 className='header-pretitle'>Overview</h6>
              <h1 className='header-title text-truncate'>Contractors</h1>
            </Col>
            <Col xs='auto'>
              <Button onClick={() => setFormVisible(true)} className='ms-2'>
                Add contractor
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Card>
        <Card.Header>
          <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
            <Form.Control
              value={filter.keyword ?? ''}
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
          count={count}
          paging={paging}
          onPaging={handlePagingChange}
          actions={getActions()}
          onSort={handleSortChange}
          sort={sort}
          columns={visibleColumns}
          data={contractors}
        />
      </Card>
      <ContractorsFilter
        onClose={() => setFilterVisible(false)}
        visible={filterVisible}
        filter={filter}
      />
      <ContractorForm
        id={editableId}
        onClose={handleOnFormClose}
        visible={formVisible || !!editableId}
      />
      {!!contractorId && (
        <EventForm onClose={() => setContractorId(undefined)} contractorId={contractorId} visible />
      )}
    </>
  );
};

export default Contractors;
