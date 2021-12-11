import React, { FC, MouseEvent } from 'react';
import Icon from '@ailibs/feather-react-ts';

interface Props {
  onClear: () => void;
  label: string;
}

const ClearableBadge: FC<Props> = (props) => {
  const { onClear, label } = props;

  const handleOnClear = ($event: MouseEvent<HTMLSpanElement>) => {
    $event.stopPropagation();
    onClear();
  };

  return (
    <div className='clearable-badge'>
      <span className='clearable-badge-label'>{label}</span>
      <span onClick={handleOnClear} className='clearable-badge-clear'>
        <Icon name='x' size={12} />
      </span>
    </div>
  );
};

export default ClearableBadge;
