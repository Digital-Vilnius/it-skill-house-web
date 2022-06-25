import { useAppDispatch } from 'core/store';
import { setFilter, resetFilter } from '../slice';
import { ContractorsFilter } from 'api/clients/contractors/types';

interface Props {
  filter: ContractorsFilter;
  onSuccess: () => void;
}

const useContractorsFilterForm = (props: Props) => {
  const { onSuccess } = props;
  const dispatch = useAppDispatch();

  const save = (data: ContractorsFilter) => {
    dispatch(setFilter(data));
    onSuccess();
  };

  const reset = () => {
    dispatch(resetFilter());
    onSuccess();
  };

  return { save, reset };
};

export default useContractorsFilterForm;
