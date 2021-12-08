import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { ContractorFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient } from 'api/clients';

const initialFormData: ContractorFormData = {
  email: '',
  firstName: '',
  lastName: '',
  technologiesIds: [],
  recruiterId: '',
  rate: 0,
  isRemote: false,
  isPublic: false,
  location: '',
  availableFrom: '',
  phone: '',
};

const getSchema = () => {
  const schema = yup.object().shape({
    rate: yup.number().positive().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    technologiesIds: yup.array().min(1).of(yup.string()),
    recruiterId: yup.string().required(),
    location: yup.string().required(),
    isRemote: yup.boolean().required(),
    isPublic: yup.boolean().required(),
    availableFrom: yup.string().trim().required(),
    phone: yup.string().required(),
  });

  return schema.required();
};

interface Props {
  successCallback: () => void;
}

const useRecruiterForm = (props: Props) => {
  const { successCallback } = props;

  const { control, handleSubmit, reset } = useForm<ContractorFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

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
