import { useAppDispatch, useAppSelector } from 'core/store';
import { setColumnsIdsAction, setColumnsOrderAction } from '../actions';

const useContractorsColumns = () => {
  const dispatch = useAppDispatch();
  const { columnsIds, columnsOrder } = useAppSelector((state) => state.contractors);

  const setColumnsIds = (ids: string[]) => {
    dispatch(setColumnsIdsAction({ ids }));
  };

  const setColumnsOrder = (ids: string[]) => {
    dispatch(setColumnsOrderAction({ ids }));
  };

  return { setColumnsIds, columnsIds, setColumnsOrder, columnsOrder };
};

export default useContractorsColumns;
