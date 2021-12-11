import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Contractor, ContractorEditFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';
import { queryClient } from 'core/query';
import { getQueryKey } from './useContractors';
import { useAppSelector } from 'core/store';
import { mapContractorEditFormData } from '../map';
import { useEffect } from 'react';

const getSchema = () => {
  const schema = yup.object().shape({
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
  });

  return schema.required();
};

interface Props {
  contractor: Contractor;
  successCallback: () => void;
}

const useRecruiterEditForm = (props: Props) => {
  const { successCallback, contractor } = props;
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, reset } = useForm<ContractorEditFormData>({
    defaultValues: mapContractorEditFormData(contractor),
    resolver: yupResolver(getSchema()),
  });

  useEffect(() => {
    reset(mapContractorEditFormData(contractor));
  }, [reset, contractor]);

  const mutationFn = async (request: ContractorEditFormData) => {
    await ContractorsClient.editContractor(contractor.id, request);
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: ContractorEditFormData) => {
    await mutateAsync(request).then(successCallback);
  };

  return { control, handleSubmit, save };
};

export default useRecruiterEditForm;
