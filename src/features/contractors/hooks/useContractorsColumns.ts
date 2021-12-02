import { useAppDispatch, useAppSelector } from 'core/store';
import { setContractorsColumnsIdsAction } from '../actions';

const useContractorsColumns = () => {
  const dispatch = useAppDispatch();
  const columnsIds = useAppSelector((state) => state.contractors.columnsIds);

  const setColumnsIds = (ids: string[]) => {
    dispatch(setContractorsColumnsIdsAction({ ids }));
  };

  return { setColumnsIds, columnsIds };
};

export default useContractorsColumns;
