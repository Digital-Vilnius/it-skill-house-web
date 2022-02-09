import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EmailFormData, Recipient } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { EmailsClient } from 'api/clients';

const initialFormData: EmailFormData = {
  subject: '',
  body: '',
  recipientsIds: [],
};

const getSchema = () => {
  return yup.object().default({
    subject: yup.string().required(),
    body: yup.string().required(),
    recipientsIds: yup.array().min(1).of(yup.number()),
  });
};

interface Props {
  recipients: Recipient[];
  onSuccess: () => void;
}

const useEmailForm = (props: Props) => {
  const { onSuccess, recipients } = props;
  const recipientsIds = recipients.map((recipient) => recipient.id);

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<EmailFormData>({
    defaultValues: { ...initialFormData, recipientsIds },
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
