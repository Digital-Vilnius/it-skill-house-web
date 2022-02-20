import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { useEffect } from 'react';
import { mapContractor, mapSaveContractorRequest } from '../map';

const getSchema = () => {
  return yup
    .object()
    .shape({
      firstName: yup.string().required('Field is required'),
      lastName: yup.string().required('Field is required'),
      email: yup.string().email('Field is invalid').required('Field is required'),
      countryCode: yup.string().required('Field is required'),
      recruiterId: yup.number().required('Field is required'),
      mainTechnologiesIds: yup.array().of(yup.number()).min(1).required('Field is required'),
      note: yup.string().required('Field is required'),
      phone: yup.string(),
      city: yup.string(),
      professionId: yup.number(),
      technologiesIds: yup.array().of(yup.number()),
      rate: yup.number().min(1),
      currency: yup.string(),
      availableFrom: yup.string(),
      experienceSince: yup.string(),
      codaId: yup.string(),
      cinodeId: yup.string(),
      tagsIds: yup.array().of(yup.number()),
      linkedInUrl: yup.string().url(),
    })
    .required();
};

interface Props {
  id?: number;
  onSuccess: () => void;
  onError?: (message: string) => void;
}

const useContractorForm = (props: Props) => {
  const { onSuccess, onError, id } = props;

  const { handleSubmit, reset, control } = useForm<SaveContractorRequest>({
    resolver: yupResolver(getSchema()),
  });

  useEffect(() => {
    if (id) {
      ContractorsClient.getContractor(id).then((response) => {
        const contractor = mapContractor(response.result);
        const request = mapSaveContractorRequest(contractor);
        reset(request);
      });
    }
  }, [id, reset]);

  const { mutateAsync } = useMutation(async (request: SaveContractorRequest) => {
    if (!id) await ContractorsClient.addContractor(request);
    else await ContractorsClient.editContractor(id, request);
  });

  const save = async (request: SaveContractorRequest) => {
    await mutateAsync(request).then(onSuccess).catch(onError);
  };

  return { handleSubmit, save, control };
};

export default useContractorForm;
