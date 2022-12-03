import { nanoid } from 'nanoid';
import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import type {
  Point,
  RippleSet,
} from '../types';

export const useRippleList = () => {
  const [ripples, setRipples] = useState<RippleSet[]>([]);
  const addRipple = useCallback(
    (point: Point) => {
      const newPoint = {
        point,
        id: nanoid(),
      } satisfies RippleSet;
      setRipples((prev) => [...prev, newPoint]);
      return newPoint;
    },
    [setRipples],
  );
  const removeRipple = useCallback(
    (id: string) => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    },
    [setRipples],
  );
  return [
    ripples,
    useMemo(() => ({
      add: addRipple,
      remove: removeRipple,
    }), [addRipple, removeRipple]),
  ] as const;
};
