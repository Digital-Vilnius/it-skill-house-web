import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EventFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { EventsClient } from 'api/clients';
import { useEffect } from 'react';
import { mapEvent, mapEventFormData } from '../map';
import { queryClient } from 'core/query';
import { getQueryKey } from 'features/contractors/hooks/useContractors';
import { useAppSelector } from 'core/store';

const initialFormData: EventFormData = {
  title: '',
  date: '',
  content: '',
  location: '',
  link: '',
};

const getSchema = () => {
  return yup.object().default({
    title: yup.string().required(),
    date: yup.string().trim().required(),
    content: yup.string().required(),
    location: yup.string().required(),
    link: yup.string().required(),
  });
};

interface Props {
  id?: number;
  contractorId: number;
  successCallback: () => void;
}

const useEventForm = (props: Props) => {
  const { id, successCallback, contractorId } = props;
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, reset } = useForm<EventFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  useEffect(() => {
    if (id) {
      EventsClient.getEvent(id).then((response) => {
        const event = mapEvent(response.result);
        const data = mapEventFormData(event);
        reset(data);
      });
    } else {
      reset(initialFormData);
    }
  }, [id, reset]);

  const mutationFn = async (data: EventFormData) => {
    if (id) await EventsClient.editEvent(id, data);
    else await EventsClient.addEvent({ ...data, contractorId });
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: EventFormData) => {
    await mutateAsync(request).then(successCallback);
  };

  return { control, handleSubmit, save };
};

export default useEventForm;
