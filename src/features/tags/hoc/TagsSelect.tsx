import React, { FC } from 'react';
import { useTags } from '../hooks';
import { mapTagOption } from '../map';
import { Select } from 'components';
import { SelectProps } from 'components/Select';

const TagsSelect: FC<SelectProps> = (props) => {
  const { isLoading, addTag, tags } = useTags();

  return <Select {...props} onCreate={addTag} loading={isLoading} options={tags.map(mapTagOption)} />;
};

export default TagsSelect;
