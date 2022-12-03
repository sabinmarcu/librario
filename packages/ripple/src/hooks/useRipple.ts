import type { MutableRefObject } from 'react';
import { useMemo } from 'react';
import { extractPosition } from '../utils';
import type {
  RippleHookProps,
  RippleHookType,
} from '../types';
import { useRippleList } from './useRippleList';
import { useRippleRef } from './useRippleRef';

export const useRipple = <T extends HTMLElement>(
  ref: MutableRefObject<T | undefined>,
  {
    disable,
    duration = 600,
  }: RippleHookProps = {},
) => {
  const [list, { add, remove }] = useRippleList();
  const onClick = useMemo(
    () => {
      if (disable) {
        return undefined;
      }
      return (event: MouseEvent) => {
        const point = add(extractPosition(event));
        setTimeout(remove, duration, point.id);
      };
    },
    [disable, add, remove],
  );
  const rippleSize = useRippleRef(ref, onClick);
  const shouldRender = useMemo(
    () => list.length > 0,
    [list],
  );
  const rippleProps = useMemo<RippleHookType>(
    () => {
      if (shouldRender) {
        return ({
          size: rippleSize!,
          duration: duration!,
          ripples: list,
          shouldRender: true,
        });
      }
      return { shouldRender: false };
    },
    [rippleSize, duration, shouldRender, list],
  );
  return rippleProps;
};
