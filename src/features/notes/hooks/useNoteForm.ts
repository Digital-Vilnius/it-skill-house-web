import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { NoteFormData } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { NotesClient } from 'api/clients';
import { useEffect } from 'react';
import { mapNote, mapNoteFormData } from '../map';
import { queryClient } from 'core/query';
import { getQueryKey } from 'features/contractors/hooks/useContractors';
import { useAppSelector } from 'core/store';

const initialFormData: NoteFormData = {
  content: '',
};

const getSchema = () => {
  return yup.object().default({
    content: yup.string().required(),
  });
};

interface Props {
  id?: number;
  contractorId: number;
  onSuccess: () => void;
}

const useNoteForm = (props: Props) => {
  const { id, onSuccess, contractorId } = props;
  const { filter, paging, sort } = useAppSelector((state) => state.contractors);

  const { control, handleSubmit, reset } = useForm<NoteFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  useEffect(() => {
    if (id) {
      NotesClient.getNote(id).then((response) => {
        const note = mapNote(response.result);
        const data = mapNoteFormData(note);
        reset(data);
      });
    } else {
      reset(initialFormData);
    }
  }, [id, reset]);

  const mutationFn = async (data: NoteFormData) => {
    if (id) await NotesClient.editNote(id, data);
    else await NotesClient.addNote({ ...data, contractorId });
    return queryClient.refetchQueries(getQueryKey(filter, paging, sort));
  };

  const { mutateAsync } = useMutation(mutationFn);

  const save = async (request: NoteFormData) => {
    await mutateAsync(request).then(onSuccess);
  };

  return { control, handleSubmit, save };
};

export default useNoteForm;
