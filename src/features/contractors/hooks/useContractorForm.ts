import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ContractorFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';

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

const getSchema = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),

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
  successCallback: () => void;
}

const useRecruiterForm = (props: Props) => {
  const { successCallback } = props;

  const { control, handleSubmit, reset, formState } = useForm<ContractorFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  console.log(formState.errors);

  const mutationFn = (data: ContractorFormData) => {
    return ContractorsClient.addContractor(data);
  };

  const { mutateAsync } = useMutation<unknown, unknown, ContractorFormData>(mutationFn);

  const save = async (data: ContractorFormData) => {
    await mutateAsync(data).then(() => {
      successCallback();
      reset(initialFormData);
    });
  };

  return { control, handleSubmit, save };
};

export default useRecruiterForm;
