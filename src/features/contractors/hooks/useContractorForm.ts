import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Contractor, ContractorFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { Contractor as ApiContractor } from 'api/clients/contractors/types';
import { ContractorsClient } from 'api/clients';

const initialFormData: ContractorFormData = {
  email: '',
  firstName: '',
  lastName: '',
  technologies: [],
  recruiterId: '',
};

const getSchema = () => {
  return yup.object().default({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    technologies: yup.array().of(yup.string()),
    recruiterId: yup.string().required(),
  });
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

  const { mutateAsync } = useMutation<ApiContractor, unknown, ContractorFormData>((data) => {
    if (contractor) return ContractorsClient.editContractor(contractor.id, data);
    return ContractorsClient.addContractor(data);
  });

  const save = (data: ContractorFormData) => {
    return mutateAsync(data);
  };

  return { control, handleSubmit, save };
};

export default useRecruiterForm;
