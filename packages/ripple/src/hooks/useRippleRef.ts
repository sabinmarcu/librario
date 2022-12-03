import type { MutableRefObject } from 'react';
import {
  useEffect,
  useMemo,
} from 'react';
import { useMeasure } from '@librario/hooks';
import { RippleContainerIndentifier } from '../constants';

export const useRippleRef = <T extends HTMLElement>(
  ref: MutableRefObject<T | undefined>,
  onClick: ((event: MouseEvent) => void) | undefined,
) => {
  useEffect(
    () => {
      if (ref.current) {
        ref.current.setAttribute(`data-${RippleContainerIndentifier}`, 'true');
        if (onClick) {
          const element = ref.current;
          element.addEventListener('click', onClick);
          return () => element.removeEventListener('click', onClick);
        }
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
