import type { ForwardedRef } from 'react';
import {
  useEffect,
  useRef,
} from 'react';

export const useReplicateRef = <T extends HTMLElement>(
  replicateRef: ForwardedRef<T>,
) => {
  const ref = useRef<T>(null);
  useEffect(
    () => {
      if (replicateRef && ref.current) {
        if (typeof replicateRef === 'function') {
          replicateRef(ref.current);
        } else {
          // eslint-disable-next-line no-param-reassign
          replicateRef.current = ref.current;
        }
      }
    },
    [ref],
  );
  return ref;
};
