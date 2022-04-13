import { useAppDispatch } from 'core/store';
import { setFilter, resetFilter } from '../slice';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContractorsFilter } from 'api/clients/contractors/types';
import { YupUtils } from 'utils';

interface Props {
  filter: ContractorsFilter;
  onSuccess: () => void;
}

const getSchema = () => {
  const schema = yup.object().shape({
    rateTo: yup.number().transform(YupUtils.emptyStringToNull).positive().nullable(),
    technologiesIds: yup.array().of(yup.number()).nullable(),
    mainTechnologiesIds: yup.array().of(yup.number()).nullable(),
    recruitersIds: yup.array().of(yup.number()).nullable(),
    countriesCodes: yup.array().of(yup.string()).nullable(),
    keyword: yup.string().trim().nullable(),
    isPublic: yup.boolean().nullable(),
    isRemote: yup.boolean().nullable(),
    isAvailable: yup.boolean().nullable(),
    availableFrom: yup.string().trim().nullable(),
  });

  return schema.required();
};

const useContractorsFilterForm = (props: Props) => {
  const { filter, onSuccess } = props;
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<ContractorsFilter>({
    defaultValues: filter,
    resolver: yupResolver(getSchema()),
  });

  const save = (data: ContractorsFilter) => {
    dispatch(setFilter(data));
    onSuccess();
  };

  const reset = () => {
    dispatch(resetFilter());
    resetForm(filter);
    onSuccess();
  };

  return { control, handleSubmit, save, reset };
};

export default useContractorsFilterForm;
