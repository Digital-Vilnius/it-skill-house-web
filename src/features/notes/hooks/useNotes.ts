import { NotesClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapNote } from '../map';
import { NotesFilter } from 'api/clients/notes/types';

interface Props {
  filter: NotesFilter;
}

export const getQueryKey = (filter: NotesFilter) => {
  return ['notes', filter];
};

const useNotes = (props: Props) => {
  const { filter } = props;

  const getNotesFn = () => NotesClient.getNotes({ filter });
  const { isLoading, data } = useQuery(getQueryKey(filter), getNotesFn);

  return {
    isLoading,
    count: data?.count ?? 0,
    notes: data?.result?.map(mapNote) ?? [],
  };
};

export default useNotes;
