import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Contractor, ContractorFormData } from '../types';
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
  location: '',
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
  });

  return schema.required();
};

interface Props {
  contractor?: Contractor;
}

const useRecruiterForm = (props: Props) => {
  const { contractor } = props;

  const { control, handleSubmit } = useForm<ContractorFormData>({
    defaultValues: contractor ?? initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = (data: ContractorFormData) => {
    return ContractorsClient.addContractor(data);
  };

  const { mutateAsync } = useMutation<unknown, unknown, ContractorFormData>(mutationFn);

  const save = (data: ContractorFormData) => {
    return mutateAsync(data);
  };

  return { control, handleSubmit, save };
};

export default useRecruiterForm;
