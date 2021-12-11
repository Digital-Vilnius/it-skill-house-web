import { ProfessionsClient } from 'api/clients';
import { useMutation, useQuery } from 'react-query';
import { mapProfession, mapProfessionOption } from '../map';
import { queryClient } from 'core/query';

export const getQueryKey = () => {
  return ['professions'];
};

const useProfessionsOptions = () => {
  const getProfessionsFn = () => ProfessionsClient.getProfessions();
  const addProfessionFn = async (name: string) => {
    const profession = await ProfessionsClient.addProfession({ name });
    await queryClient.refetchQueries(getQueryKey());
    return profession.result.id;
  };

  const { isLoading, data } = useQuery(getQueryKey(), getProfessionsFn);
  const { mutateAsync: addProfession } = useMutation(addProfessionFn);

  const professions = data?.result?.map(mapProfession) ?? [];
  const professionsOptions = professions.map(mapProfessionOption);
  const count = data?.count ?? 0;

  return {
    addProfession,
    isLoading,
    count,
    professions,
    professionsOptions,
  };
};

export default useProfessionsOptions;
