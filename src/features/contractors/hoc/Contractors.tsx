import React, { FC, useEffect, useState } from 'react';
import { useContractors, useContractorsColumns } from '../hooks';
import { useAppSelector } from 'core/store';
import { ContractorsTable } from '../components';
import { getAllColumns, getVisibleColumns, getStickyColumns } from '../constants';
import { MultiSelect } from 'components';
import { mapColumnToOption } from '../map';
import { Column } from 'components/DataTable/types';
import { Contractor } from '../types';

const Contractors: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, total } = useContractors({ filter, paging, sort });
  const { setColumnsIds, columnsIds } = useContractorsColumns();
  const [columns, setColumns] = useState<Column<Contractor>[]>(getVisibleColumns(columnsIds));

  useEffect(() => {
    setColumns(getVisibleColumns(columnsIds));
  }, [columnsIds]);

  return (
    <div>
      <ContractorsTable columns={columns} contractors={contractors} total={total} />
      <MultiSelect
        id='contractors-columns-select'
        options={getAllColumns().map(mapColumnToOption)}
        value={[...columnsIds, ...getStickyColumns().map((column) => column.id)]}
        onChange={setColumnsIds}
      />
    </div>
  );
};

export default Contractors;
