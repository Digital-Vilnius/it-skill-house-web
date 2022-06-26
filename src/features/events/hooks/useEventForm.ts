import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { EventFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { EventsClient } from 'api/clients';
import { useEffect } from 'react';
import { mapEvent, mapEventFormData } from '../map';
import { useAppDispatch } from 'core/store';
import { updateLastUpdated } from 'features/contractors/slice';

const getSchema = () => {
  return yup.object().default({
    title: yup.string().required(),
    date: yup.string().trim().required(),
    content: yup.string().required(),
  });
};

interface Props {
  id?: number;
  contractorId: number;
  onSuccess: () => void;
}

const useEventForm = (props: Props) => {
  const { id, onSuccess, contractorId } = props;
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset } = useForm<EventFormData>({
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
      reset({});
    }
  }, [id, reset]);

  const mutationFn = async (data: EventFormData) => {
    if (id) await EventsClient.editEvent(id, data);
    else await EventsClient.addEvent({ ...data, contractorId });
    dispatch(updateLastUpdated());
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: EventFormData) => {
    await mutateAsync(request).then(onSuccess);
  };

  return { control, handleSubmit, save };
};

export default useEventForm;
