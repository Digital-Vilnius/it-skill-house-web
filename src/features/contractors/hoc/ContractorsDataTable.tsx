import React, { FC } from 'react';
import { useContractors } from '../hooks';
import { useAppDispatch, useAppSelector } from 'core/store';
import { getAllColumns, getVisibleColumns } from '../utils';
import { setPaging, setSort, setSelectedContractors } from '../slice';
import { ContractorsDataTable as ControllerContractorsDataTable } from '../components';
import { Paging, Sort } from 'api/types';
import { Contractor } from '../types';
import { useModal } from 'core/modal/hooks';
import ContractorForm, { ContractorFormProps } from './ContractorForm';

const ContractorsDataTable: FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useModal();

  const { filter, paging, sort, selected, visibleColumnsIds, columnsOrder } = useAppSelector(
    (state) => state.contractors
  );

  const { contractors, count } = useContractors({ filter, paging, sort });

  const handleSortChange = (newSort: Sort) => {
    dispatch(setSort(newSort));
  };

  const handlePagingChange = (newPaging: Paging) => {
    dispatch(setPaging(newPaging));
  };

  const handleSelectedContractorsChange = (newSelectedContractors: Contractor[]) => {
    dispatch(setSelectedContractors(newSelectedContractors));
  };

  const openContractorEditForm = (id: number) => {
    showModal<ContractorFormProps>(ContractorForm, { title: 'Edit contractor' }, { id });
  };

  return (
    <ControllerContractorsDataTable
      contractors={contractors}
      count={count}
      columns={getVisibleColumns(getAllColumns(columnsOrder), visibleColumnsIds)}
      sort={sort}
      setSort={handleSortChange}
      paging={paging}
      setPaging={handlePagingChange}
      selectedContractors={selected}
      onSelectedContractorsChange={handleSelectedContractorsChange}
      onDelete={console.log}
      onEdit={openContractorEditForm}
      onDetails={(id) => window.open(`/admin/contractors/${id}`)}
    />
  );
};

export default ContractorsDataTable;
