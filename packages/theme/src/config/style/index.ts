import { shape } from './shape';
import type { TransformSet } from '../../types/transform';
import { shadows } from './shadows';
import { typography } from './typography';
import { interactions } from './interactions';

export const staticStyles = {
  shadows,
  typography,
  interactions,
  shape,
} as const satisfies TransformSet;
