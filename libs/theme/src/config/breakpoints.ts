import type { Breakpoints } from '../types/breakpoints';

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1600,
} as const satisfies Breakpoints;
