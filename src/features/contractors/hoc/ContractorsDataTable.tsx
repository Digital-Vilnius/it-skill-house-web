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
import ContractorDeleteConfirmation, {
  ContractorDeleteConfirmationProps,
} from './ContractorDeleteConfirmation';
import { EmailForm } from 'features/emails/hoc';
import EventForm, { EventFormProps } from 'features/events/hoc/EventForm';
import NoteForm, { NoteFormProps } from 'features/notes/hoc/NoteForm';
import { useNavigate } from 'react-router-dom';

const ContractorsDataTable: FC = () => {
  const dispatch = useAppDispatch();
  const { showModal } = useModal();
  const navigate = useNavigate();

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
    showModal<ContractorFormProps>(
      ContractorForm,
      { title: 'Edit contractor', size: 'xl' },
      { id }
    );
  };

  const openAddNoteForm = (id: number) => {
    showModal<NoteFormProps>(NoteForm, { title: 'Add note', size: 'lg' }, { contractorId: id });
  };

  const openAddEventForm = (id: number) => {
    showModal<EventFormProps>(EventForm, { title: 'Add event', size: 'lg' }, { contractorId: id });
  };

  const openSendEmailForm = (id: number) => {
    const filteredContractors = contractors.filter((contractor) => contractor.id === id);
    showModal(EmailForm, { title: 'Send email', size: 'lg' }, { contractors: filteredContractors });
  };

  const openContractorDeleteConfirmation = (id: number) => {
    showModal<ContractorDeleteConfirmationProps>(
      ContractorDeleteConfirmation,
      { title: 'Are you sure that you want to delete this contractor?' },
      { id }
    );
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
      onDelete={openContractorDeleteConfirmation}
      onEdit={openContractorEditForm}
      onDetails={(id) => navigate(`/admin/contractors/${id}`)}
      onAddEvent={openAddEventForm}
      onSendEmail={openSendEmailForm}
      onAddNote={openAddNoteForm}
    />
  );
};

export default ContractorsDataTable;
