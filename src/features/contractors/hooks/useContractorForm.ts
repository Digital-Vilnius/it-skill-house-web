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

const initialFormData: ContractorFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',

  isRemote: false,
  isPublic: false,
  hasContract: false,
  isOnSite: false,

  location: '',
  rate: 0,

  professionId: 0,
  recruiterId: 0,
  mainTechnologyId: 0,

  technologiesIds: [],
  tagsIds: [],

  availableFrom: '',
  experienceSince: '',

  linkedInUrl: '',
  codaId: 0,
  cinodeId: 0,
};

const getSchema = (isEdit: boolean) => {
  const editShape = {
    isRemote: yup.boolean().required(),
    isPublic: yup.boolean().required(),
    hasContract: yup.boolean().required(),
    isOnSite: yup.boolean().required(),

    location: yup.string().required(),
    rate: yup.number().positive().required(),

    professionId: yup.number().required(),
    recruiterId: yup.number().required(),
    mainTechnologyId: yup.number().required(),

    technologiesIds: yup.array().min(1).of(yup.number()),
    tagsIds: yup.array().min(1).of(yup.number()),

    availableFrom: yup.string().trim().required(),
    experienceSince: yup.string().trim().required(),

    linkedInUrl: yup.string(),
    codaId: yup.number().required(),
    cinodeId: yup.number().required(),
  };

  const addShape = {
    ...editShape,
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  };

  return yup
    .object()
    .shape(isEdit ? editShape : addShape)
    .required();
};

interface Props {
  id?: number;
  successCallback: () => void;
}

const useContractorForm = (props: Props) => {
  const { successCallback, id } = props;
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, reset } = useForm<ContractorFormData>({
    resolver: yupResolver(getSchema(!!id)),
    defaultValues: initialFormData,
  });

  useEffect(() => {
    if (id) {
      ContractorsClient.getContractor(id).then((response) => {
        const contractor = mapContractor(response.result);
        const data = mapContractorFormData(contractor);
        reset(data);
      });
    } else {
      reset(initialFormData);
    }
  }, [id, reset]);

  const mutationFn = async (data: ContractorFormData) => {
    if (id) await ContractorsClient.editContractor(id, data);
    else await ContractorsClient.addContractor(data);
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: ContractorFormData) => {
    await mutateAsync(request).then(successCallback);
  };

  return { control, handleSubmit, save };
};

export default useContractorForm;
