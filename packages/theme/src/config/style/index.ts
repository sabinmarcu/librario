import type { TransformSet } from '../../types/transform';
import { shadows } from './shadows';
import { typography } from './typography';
import { interactions } from './interactions';

export const staticStyles = {
  shadows,
  typography,
  interactions,
} as const satisfies TransformSet;
