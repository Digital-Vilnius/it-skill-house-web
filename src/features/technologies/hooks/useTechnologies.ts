import { TechnologiesClient } from 'api/clients';
import { useMutation, useQuery } from 'react-query';
import { mapTechnology } from '../map';
import { queryClient } from 'core/query';

export const getQueryKey = () => {
  return ['technologies'];
};

const useTechnologies = () => {
  const getTechnologiesFn = () => TechnologiesClient.getTechnologies();

  const addTechnologyFn = async (name: string) => {
    const technology = await TechnologiesClient.addTechnology({ name });
    await queryClient.refetchQueries(getQueryKey());
    return technology.result.id;
  };

  const { isLoading, data } = useQuery(getQueryKey(), getTechnologiesFn);
  const { mutateAsync: addTechnology } = useMutation(addTechnologyFn);

  const technologies = data?.result?.map(mapTechnology) ?? [];
  const count = data?.count ?? 0;

  return {
    addTechnology,
    isLoading,
    count,
    technologies,
  };
};

export default useTechnologies;
