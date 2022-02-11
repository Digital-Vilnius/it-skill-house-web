import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'div'> {
  ratio?: '4by3';
  size: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';
  status: 'online' | 'offline';
}

const Avatar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { ratio, size, status, className, ...rest } = props;
  const classes = classNames(
    'avatar',
    ratio && `avatar-${ratio}`,
    size && `avatar-${size}`,
    status && `avatar-${status}`,
    className
  );

  return <div {...rest} className={classes} ref={ref} {...props} />;
});

export default Avatar;
