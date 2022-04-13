import React, { FC } from 'react';
import classNames from 'classnames';

interface Props {
  firstWord: string;
  secondWord: string;
  className?: string;
}

const Initials: FC<Props> = (props) => {
  const { className, firstWord, secondWord } = props;

  return <div className={classNames('it-initials', className)}>{`${firstWord[0]}${secondWord[0]}`}</div>;
};

export default Initials;
