import type { MutableRefObject } from 'react';
import {
  useEffect,
  useState,
} from 'react';

export const useScroll = (
  ref: MutableRefObject<HTMLElement>,
) => {
  const [scroll, setScroll] = useState<number>(0);
  useEffect(
    () => {
      const element = ref.current;
      const handler = () => {
        setScroll(element.scrollTop);
      };
      element.addEventListener('scroll', handler);
      return () => element.removeEventListener('scroll', handler);
    },
  );
  return scroll;
};
