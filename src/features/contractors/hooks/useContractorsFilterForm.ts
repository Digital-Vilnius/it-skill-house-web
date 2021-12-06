import { useAppDispatch } from 'core/store';
import { ContractorsFilter } from 'api/clients/contractors/types';
import { resetContractorsFilterAction, setContractorsFilterAction } from '../actions';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NumberUtils } from 'utils';
import { identity, pickBy } from 'lodash';

interface Props {
  filter: ContractorsFilter;
  onSuccess: () => void;
}

const getSchema = () => {
  const schema = yup.object().shape({
    rateFrom: yup.number().positive().transform(NumberUtils.formatNumber).nullable(),
    rateTo: yup.number().positive().transform(NumberUtils.formatNumber).nullable(),
    technologiesIds: yup.array().of(yup.string()).nullable(),
    recruitersIds: yup.array().of(yup.string()).nullable(),
    keyword: yup.string().trim().nullable(),
    isPublic: yup.boolean().required(),
    isRemote: yup.boolean().required(),
    isAvailable: yup.boolean().required(),
    availableFrom: yup.string().trim().nullable(),
    availableTo: yup.string().trim().nullable(),
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
    const cleanedFilter = pickBy(data, identity);
    dispatch(setContractorsFilterAction({ filter: cleanedFilter }));
    onSuccess();
  };

  const reset = () => {
    dispatch(resetContractorsFilterAction());
    resetForm({});
    onSuccess();
  };

  return { control, handleSubmit, save, reset };
};

export default useContractorsFilterForm;
