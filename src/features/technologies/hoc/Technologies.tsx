import React, { FC } from 'react';
import { useTechnologies } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { DataTable } from 'components';
import { Column } from 'components/DataTable';
import { Technology } from '../types';
import { Paging, Sort } from 'api/types';
import { setPagingAction, setSortAction, setSelectedAction } from '../actions';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Icon from '@ailibs/feather-react-ts';
import { TechnologyKeys } from '../constants';

export const columns: Column<Technology>[] = [
  { id: TechnologyKeys.id, label: 'Id', sortable: true },
  { id: TechnologyKeys.name, label: 'Name', sortable: true },
  { id: TechnologyKeys.count, label: 'Count', sortable: true },
  { id: TechnologyKeys.updated, label: 'Updated', className: 'text-center', sortable: true },
  { id: TechnologyKeys.created, label: 'Created', className: 'text-center', sortable: true },
];

const Technologies: FC = () => {
  const dispatch = useAppDispatch();
  const { filter, paging, sort, selected } = useAppSelector((state) => state.technologies);
  const { technologies, count } = useTechnologies({ filter, paging, sort });

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setPagingAction({ paging: newPaging }));
  };

  const handleSortChange = (newSort: Sort) => {
    dispatch(setSortAction({ sort: newSort }));
  };

  const handleSelectedChange = (selectedTechnologies: Technology[]) => {
    dispatch(setSelectedAction({ technologies: selectedTechnologies }));
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col>
          <div className='header mt-md-5'>
            <div className='header-body'>
              <Row className='align-items-center'>
                <Col>
                  <h6 className='header-pretitle'>Overview</h6>
                  <h1 className='header-title text-truncate'>Technologies</h1>
                </Col>
                <Col xs='auto'>
                  <Button className='ms-2'>Add technology</Button>
                </Col>
              </Row>
            </div>
          </div>
          <Card>
            <Card.Header>
              <InputGroup className='input-group-merge input-group-flush input-group-reverse'>
                <Form.Control type='search' placeholder='Search' />
                <InputGroup.Text>
                  <Icon name='search' size={16} />
                </InputGroup.Text>
              </InputGroup>
            </Card.Header>
            <DataTable
              selectedRows={selected}
              onSelectedRowsChange={handleSelectedChange}
              paging={paging}
              onPaging={handlePagingChange}
              count={count}
              onSort={handleSortChange}
              sort={sort}
              columns={columns}
              data={technologies}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Technologies;
