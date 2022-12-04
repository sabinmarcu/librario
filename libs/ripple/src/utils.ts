import type { MutableRefObject } from 'react';
import type { Point } from './types';

export const extractPosition = <T extends HTMLElement>(
  event: MouseEvent,
  ref: MutableRefObject<T | undefined>,
): Point => {
  const { x: clickX, y: clickY } = (event.target as HTMLElement).getBoundingClientRect();
  const { x: elementX, y: elementY } = ref.current!.getBoundingClientRect();
  const [diffX, diffY] = [clickX - elementX, clickY - elementY];
  return {
    x: event.offsetX + diffX,
    y: event.offsetY + diffY,
  };
};
