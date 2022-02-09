import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'core/store';
import { ColumnsSelect as ControlledColumnsSelect } from '../components';
import { getAllColumns } from '../utils';
import { setColumnsOrder, setVisibleColumnsIds } from '../slice';

const ColumnsSelect: FC = () => {
  const dispatch = useAppDispatch();
  const { columnsOrder, visibleColumnsIds } = useAppSelector((state) => state.contractors);

  const handleColumnsOrderChange = (newColumnsOrder: string[]) => {
    dispatch(setColumnsOrder(newColumnsOrder));
  };

  const handleVisibleColumnsChange = (newVisibleColumns: string[]) => {
    dispatch(setVisibleColumnsIds(newVisibleColumns));
  };

  return (
    <ControlledColumnsSelect
      columnsOrder={columnsOrder}
      onColumnsOrderChange={handleColumnsOrderChange}
      onVisibleColumnsChange={handleVisibleColumnsChange}
      allColumns={getAllColumns(columnsOrder)}
      visibleColumns={visibleColumnsIds}
    />
  );
};

export default ColumnsSelect;
