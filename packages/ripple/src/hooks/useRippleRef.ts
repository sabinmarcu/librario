import type { MutableRefObject } from 'react';
import {
  useEffect,
  useMemo,
} from 'react';
import { useMeasure } from '@librario/hooks';

export const useRippleRef = <T extends HTMLElement>(
  ref: MutableRefObject<T | undefined>,
  onClick: ((event: MouseEvent) => void) | undefined,
) => {
  useEffect(
    () => {
      if (onClick && ref.current) {
        const element = ref.current;
        element.addEventListener('click', onClick);
        return () => element.removeEventListener('click', onClick);
      }
      return undefined;
    },
    [onClick, ref],
  );
  const size = useMeasure<T>(ref);
  const rippleSize = useMemo(
    () => (size ? Math.max(size.width, size.height) / 2 : 0),
    [size],
  );
  return rippleSize;
};
