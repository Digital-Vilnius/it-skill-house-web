import React, { FC, useEffect, useState } from 'react';
import { useContractors, useContractorsColumns } from '../hooks';
import { useAppSelector } from 'core/store';
import { ContractorsTable } from '../components';
import { getAllColumns, getVisibleColumns } from '../constants';
import { ColumnsSelect } from 'components';
import { Column } from 'components/DataTable/types';
import { Contractor } from '../types';

const Contractors: FC = () => {
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);
  const { contractors, total } = useContractors({ filter, paging, sort });
  const { setColumnsIds, columnsIds, setColumnsOrder, columnsOrder } = useContractorsColumns();
  const [allColumns, setAllColumns] = useState<Column<Contractor>[]>(getAllColumns(columnsOrder));
  const [visibleColumns, setVisibleColumns] = useState<Column<Contractor>[]>(
    getVisibleColumns(allColumns, columnsIds)
  );

  useEffect(() => {
    setVisibleColumns(getVisibleColumns(allColumns, columnsIds));
  }, [allColumns, columnsIds]);

  useEffect(() => {
    setAllColumns(getAllColumns(columnsOrder));
  }, [columnsOrder]);

  return (
    <div>
      <ContractorsTable columns={visibleColumns} contractors={contractors} total={total} />
      <ColumnsSelect
        order={columnsOrder}
        onOrderChange={setColumnsOrder}
        onChange={setColumnsIds}
        columns={getAllColumns(columnsOrder)}
        value={visibleColumns.map((column) => column.id)}
      />
    </div>
  );
};

export default Contractors;
