import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EmailFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { EmailsClient } from 'api/clients';
import { Contractor } from 'features/contractors/types';

const initialFormData: EmailFormData = {
  subject: '',
  body: '',
  contractorsIds: [],
};

const getSchema = () => {
  return yup.object().default({
    subject: yup.string().required(),
    body: yup.string().required(),
    contractorsIds: yup.array().min(1).of(yup.number()),
  });
};

interface Props {
  contractors: Contractor[];
  onSuccess: () => void;
}

const useEmailForm = (props: Props) => {
  const { onSuccess, contractors } = props;
  const contractorsIds = contractors.map((contractor) => contractor.id);

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<EmailFormData>({
    defaultValues: { ...initialFormData, contractorsIds },
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = async (data: EmailFormData) => {
    await EmailsClient.sendEmail(data);
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: EmailFormData) => {
    await mutateAsync(request).then(onSuccess);
  };

  const reset = () => {
    resetForm({});
  };

  return { control, handleSubmit, save, reset };
};

export default useEmailForm;
