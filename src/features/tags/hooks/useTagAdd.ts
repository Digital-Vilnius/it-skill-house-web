import { useMutation } from 'react-query';
import { Tag as ApiTag } from 'api/clients/tags/types';
import { TagsClient } from 'api/clients';
import { TagFormData } from '../types';

const useTagAdd = () => {
  const { mutateAsync } = useMutation<ApiTag, unknown, TagFormData>((data) => {
    return TagsClient.addTag(data);
  });

  const addTag = (data: TagFormData) => {
    return mutateAsync(data);
  };

  return { addTag };
};

export default useTagAdd;
