import { TagsClient } from 'api/clients';
import { useQuery } from 'react-query';
import { mapTag } from '../map';

export const getQueryKey = () => {
  return ['tags'];
};

const useTags = () => {
  const getTagsFn = () => TagsClient.getTags();
  const { isLoading, data } = useQuery(getQueryKey(), getTagsFn, {
    keepPreviousData: true,
  });

  return {
    isLoading,
    count: data?.count ?? 0,
    tags: data?.result?.map(mapTag) ?? [],
  };
};

export default useTags;
