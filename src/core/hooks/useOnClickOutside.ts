import { RefObject, useCallback, useEffect } from 'react';

interface Props {
  callback: () => void;
  ref: RefObject<HTMLElement>;
}

const useOnClickOutside = (props: Props) => {
  const { ref, callback } = props;

  const handleClickOutside = useCallback(
    ($event: MouseEvent) => {
      const { target } = $event;
      if (ref.current && !ref.current.contains(target as Node)) callback();
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
};

export default useOnClickOutside;
