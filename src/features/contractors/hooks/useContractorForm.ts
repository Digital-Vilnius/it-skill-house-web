import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';
import { SaveContractorRequest } from 'api/clients/contractors/types';
import { useEffect } from 'react';
import { mapContractor } from '../map';

const defaultValues: SaveContractorRequest = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  note: '',

  countryCode: 'LT',
  city: null,

  codaId: null,
  cinodeId: null,

  rate: null,
  currency: 'EUR',

  availableFrom: null,
  experienceSince: null,

  hasContract: false,
  isOnSite: false,
  isPublic: false,
  isRemote: false,

  professionId: null,
  recruiterId: 0,

  linkedInUrl: null,

  tagsIds: [],
  technologiesIds: [],
  mainTechnologiesIds: [],
};

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
  onError: (message: string) => void;
}

const useContractorForm = (props: Props) => {
  const { onSuccess, onError, id } = props;

  const { control, handleSubmit, reset } = useForm<SaveContractorRequest>({
    resolver: yupResolver(getSchema()),
    defaultValues,
  });

  useEffect(() => {
    if (id) {
      ContractorsClient.getContractor(id).then((response) => {
        const contractor = mapContractor(response.result);
        reset(contractor);
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

  return { control, handleSubmit, save };
};

export default useContractorForm;
