import React, { FC } from 'react';
import { useTags } from '../hooks';
import { mapTagOption } from '../map';
import { FormSelect } from 'components';
import { FormSelectProps } from 'components/Form/FormSelect';

const TagsSelect: FC<FormSelectProps> = (props) => {
  const { isLoading, addTag, tags } = useTags();

  return (
    <FormSelect {...props} onCreate={addTag} loading={isLoading} options={tags.map(mapTagOption)} />
  );
};

export default TagsSelect;
