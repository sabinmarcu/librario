import {
  useDebugValue,
  useEffect,
} from 'react';

export const usePipeJotai = <T>(
  value: T,
  setter: (update: T) => void,
) => {
  useEffect(() => {
    setter(value);
  }, [value]);
  useDebugValue(value);
};
