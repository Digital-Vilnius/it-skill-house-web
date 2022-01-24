import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EmailFormData, Recipient } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { EmailsClient } from 'api/clients';
import { useEffect } from 'react';

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
  successCallback: () => void;
}

const useEmailForm = (props: Props) => {
  const { successCallback, recipients } = props;

  const { control, handleSubmit, reset } = useForm<EmailFormData>({
    defaultValues: { ...initialFormData, recipientsIds: recipients.map((recipient) => recipient.id) },
    resolver: yupResolver(getSchema()),
  });

  useEffect(() => {
    reset(initialFormData);
  }, [reset]);

  const mutationFn = async (data: EmailFormData) => {
    await EmailsClient.sendEmail(data);
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: EmailFormData) => {
    await mutateAsync(request).then(successCallback);
  };

  return { control, handleSubmit, save };
};

export default useEmailForm;
