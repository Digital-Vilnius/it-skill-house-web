import { TagsClient } from 'api/clients';
import { useMutation, useQuery } from 'react-query';
import { mapTag } from '../map';
import { queryClient } from 'core/query';

export const getQueryKey = () => {
  return ['tags'];
};

const useTags = () => {
  const getTagsFn = () => TagsClient.getTags();

  const addTagFn = async (name: string) => {
    const tag = await TagsClient.addTag({ name });
    await queryClient.refetchQueries(getQueryKey());
    return tag.result.id;
  };

  const { isLoading, data } = useQuery(getQueryKey(), getTagsFn);
  const { mutateAsync: addTag } = useMutation(addTagFn);

  const tags = data?.result?.map(mapTag) ?? [];
  const count = data?.count ?? 0;

  return {
    addTag,
    isLoading,
    count,
    tags,
  };
};

export default useTags;
