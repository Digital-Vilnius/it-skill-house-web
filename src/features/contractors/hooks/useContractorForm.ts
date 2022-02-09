import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ContractorFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';
import { queryClient } from 'core/query';
import { getQueryKey } from './useContractors';
import { useAppSelector } from 'core/store';
import { useEffect } from 'react';
import { mapContractor, mapContractorFormData } from '../map';

const getSchema = (isEdit: boolean) => {
  const editShape = {
    countryCode: yup.string().required(),
    recruiterId: yup.number().required(),
    mainTechnologiesIds: yup.array().of(yup.number()).min(1).required(),
  };

  const addShape = {
    ...editShape,
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  };

  return yup
    .object()
    .shape(isEdit ? editShape : addShape)
    .required();
};

interface Props {
  id?: number;
  onSuccess: () => void;
}

const useContractorForm = (props: Props) => {
  const { onSuccess, id } = props;
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<ContractorFormData>({
    resolver: yupResolver(getSchema(!!id)),
  });

  useEffect(() => {
    if (id) {
      ContractorsClient.getContractor(id).then((response) => {
        const contractor = mapContractor(response.result);
        const data = mapContractorFormData(contractor);
        resetForm(data);
      });
    } else {
      resetForm({});
    }
  }, [id, resetForm]);

  const mutationFn = async (data: ContractorFormData) => {
    if (id) await ContractorsClient.editContractor(id, data);
    else await ContractorsClient.addContractor(data);
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: ContractorFormData) => {
    await mutateAsync(request).then(onSuccess);
  };

  const reset = () => {
    resetForm({});
  };

  return { control, handleSubmit, save, reset };
};

export default useContractorForm;
