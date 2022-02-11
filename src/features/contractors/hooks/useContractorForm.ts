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
      countryCode: yup.string().required(),
      recruiterId: yup.number().required(),
      mainTechnologiesIds: yup.array().of(yup.number()).min(1).required(),
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
