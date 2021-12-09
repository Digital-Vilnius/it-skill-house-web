import React, { FC } from 'react';
import { MultiSelect } from 'components';
import { useTags, useTagAdd } from '../hooks';
import { mapTagOption } from '../map';
import { queryClient } from 'core/query';
import { getQueryKey } from '../hooks/useTags';
import { MultiSelectProps } from 'components/Select/MultiSelect';

type Props = Omit<MultiSelectProps, 'options' | 'id' | 'onOptionAdd'>;

const TagsMultiSelect: FC<Props> = (props) => {
  const { value, onChange, ...rest } = props;
  const { tags } = useTags();
  const { addTag } = useTagAdd();

  const handleOptionAdd = (name: string) => {
    addTag({ name }).then(async (tag) => {
      await queryClient.refetchQueries(getQueryKey());
      onChange([...value, tag.id]);
    });
  };

  return (
    <MultiSelect
      onOptionAdd={handleOptionAdd}
      id='technologies'
      options={tags.map(mapTagOption)}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TagsMultiSelect;
