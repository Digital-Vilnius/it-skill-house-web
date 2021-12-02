import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Recruiter, RecruiterFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { Recruiter as ApiRecruiter } from 'api/clients/recruiters/types';
import { RecruitersClient } from 'api/clients';

const initialFormData: RecruiterFormData = {
  email: '',
  firstName: '',
  lastName: '',
};

const getSchema = () => {
  return yup.object().default({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
  });
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

  const { mutateAsync } = useMutation<ApiRecruiter, unknown, RecruiterFormData>((data) => {
    if (recruiter) return RecruitersClient.editRecruiter(recruiter.id, { userId: '' });
    return RecruitersClient.addRecruiter({ userId: '' });
  });

  const save = (data: RecruiterFormData) => {
    return mutateAsync(data);
  };

  return { control, handleSubmit, save };
};

export default useRecruiterForm;
