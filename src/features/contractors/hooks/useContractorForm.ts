import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient, NotesClient } from 'api/clients';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { useEffect } from 'react';
import { mapContractor, mapSaveContractorRequest } from '../map';
import { YupUtils } from 'utils';

const getSchema = (isEdit: boolean) => {
  const contractorShape = {
    firstName: yup.string().required('Field is required'),
    lastName: yup.string().required('Field is required'),
    email: yup.string().email('Field is invalid').required('Field is required'),
    countryCode: yup.string().required('Field is required'),
    recruiterId: yup.number().required('Field is required'),
    mainTechnologiesIds: yup.array().of(yup.number()).min(1).max(2).required('Field is required'),
    phone: yup.string().nullable(),
    city: yup.string().nullable(),
    professionId: yup.number().nullable(),
    technologiesIds: yup.array().of(yup.number()).nullable(),
    rate: yup.number().transform(YupUtils.emptyStringToNull).min(1).nullable(),
    currency: yup.string().nullable(),
    availableFrom: yup.string().nullable(),
    experienceSince: yup.number().nullable(),
    codaId: yup.number().nullable(),
    cinodeId: yup.number().nullable(),
    tagsIds: yup.array().of(yup.number()).nullable(),
    linkedInUrl: yup.string().url().nullable(),
  };

  const noteShape = {
    note: yup.string().required('Field is required'),
  };

  return yup
    .object()
    .shape(isEdit ? contractorShape : { ...contractorShape, ...noteShape })
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
    resolver: yupResolver(getSchema(!!id)),
  });

  useEffect(() => {
    if (id) {
      ContractorsClient.getContractor(id).then((response) => {
        const contractor = mapContractor(response);
        const request = mapSaveContractorRequest(contractor);
        reset(request);
      });
    }
  }, [id, reset]);

  const { mutateAsync } = useMutation(async (request: SaveContractorRequest) => {
    if (!id) {
      const response = await ContractorsClient.addContractor(request);
      await NotesClient.addNote({ contractorId: response.result.id, content: request.note });
    } else await ContractorsClient.editContractor(id, request);
  });

  const save = async (request: SaveContractorRequest) => {
    await mutateAsync(request).then(onSuccess).catch(onError);
  };

  return { handleSubmit, save, control };
};

export default useContractorForm;
