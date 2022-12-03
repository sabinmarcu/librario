import type { Point } from './types';

export const extractPosition = (event: MouseEvent): Point => ({
  x: event.offsetX,
  y: event.offsetY,
});
