import { useAppDispatch, useAppSelector } from 'core/store';
import { setContractorsColumnsIdsAction, setContractorsColumnsOrderAction } from '../actions';

const useContractorsColumns = () => {
  const dispatch = useAppDispatch();
  const { columnsIds, columnsOrder } = useAppSelector((state) => state.contractors);

  const setColumnsIds = (ids: string[]) => {
    dispatch(setContractorsColumnsIdsAction({ ids }));
  };

  const setColumnsOrder = (ids: string[]) => {
    dispatch(setContractorsColumnsOrderAction({ ids }));
  };

  return { setColumnsIds, columnsIds, setColumnsOrder, columnsOrder };
};

export default useContractorsColumns;
