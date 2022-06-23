import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EmailFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { ContractorsClient, EmailsClient } from 'api/clients';
import { Contractor } from 'features/contractors/types';
import { mapSendEmailRequest } from '../map';

const initialFormData: EmailFormData = {
  subject: '',
  body: '',
};

const getSchema = () => {
  return yup.object().default({
    subject: yup.string().required(),
    body: yup.string().required(),
  });
};

interface Props {
  contractors: Contractor[];
  onSuccess: () => void;
}

const useEmailForm = (props: Props) => {
  const { onSuccess, contractors } = props;

  const {
    control,
    handleSubmit,
    reset: resetForm,
  } = useForm<EmailFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  const mutationFn = async (data: EmailFormData) => {
    const requests = contractors.map((contractor) => mapSendEmailRequest(data, contractor));
    await EmailsClient.sendMultipleEmails(requests);

    const contractorsIds = contractors.map((contractor) => contractor.id);
    await ContractorsClient.updateContractorsMailedDate({ contractorsIds });
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
