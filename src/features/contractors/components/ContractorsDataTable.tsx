import React, { FC } from 'react';
import { DataTable } from 'components';
import { Contractor } from '../types';
import { Column } from 'components/DataTable';
import { Paging, Sort } from 'api/types';

interface Props {
  contractors: Contractor[];
  count: number;
  columns: Column<Contractor>[];
  sort: Sort;
  setSort: (sort: Sort) => void;
  paging: Paging;
  setPaging: (paging: Paging) => void;
  selectedContractors: Contractor[];
  onSelectedContractorsChange: (contractor: Contractor[]) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onDetails: (id: number) => void;
  onAddEvent: (id: number) => void;
  onAddNote: (id: number) => void;
  onSendEmail: (id: number) => void;
}

const ContractorsDataTable: FC<Props> = (props) => {
  const {
    contractors,
    columns,
    sort,
    setSort,
    paging,
    setPaging,
    count,
    selectedContractors,
    onSelectedContractorsChange,
    onDelete,
    onEdit,
    onDetails,
    onAddNote,
    onAddEvent,
    onSendEmail,
  } = props;

  return (
    <DataTable
      onSelectedRowsChange={onSelectedContractorsChange}
      selectedRows={selectedContractors}
      count={count}
      paging={paging}
      onPaging={setPaging}
      onSort={setSort}
      sort={sort}
      columns={columns}
      data={contractors}
      onRowPress={onDetails}
      actions={[
        { label: 'Add note', onClick: onAddNote },
        { label: 'Add event', onClick: onAddEvent },
        { label: 'Send email', onClick: onSendEmail },
        { label: 'Edit', onClick: onEdit },
        { label: 'Details', onClick: onDetails },
        { label: 'Delete', onClick: onDelete },
      ]}
    />
  );
};

export default ContractorsDataTable;
