import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Recruiter, RecruiterFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { RecruitersClient } from 'api/clients';

const initialFormData: RecruiterFormData = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
};

const getSchema = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
  });

  return schema.required();
};

interface Props {
  recruiter?: Recruiter;
}

const useRecruiterForm = (props: Props) => {
  const { recruiter } = props;

  const { control, handleSubmit } = useForm<RecruiterFormData>({
    defaultValues: recruiter ?? initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = (data: RecruiterFormData) => {
    return RecruitersClient.addRecruiter(data);
  };

  const { mutateAsync } = useMutation<unknown, unknown, RecruiterFormData>(mutationFn);

  const save = (data: RecruiterFormData) => {
    return mutateAsync(data);
  };

  return { control, handleSubmit, save };
};

export default useRecruiterForm;
