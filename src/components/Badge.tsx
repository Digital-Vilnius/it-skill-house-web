import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  label: string;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
}

const Badge: FC<Props> = (props) => {
  const { label, onPress, disabled, className } = props;

  const handleOnClick = () => {
    if (disabled) return;
    onPress?.();
  };

  return (
    <span
      onClick={handleOnClick}
      className={classNames('it-badge', { disabled }, { readonly: !onPress }, className)}
    >
      {label}
    </span>
  );
};

export default Badge;
