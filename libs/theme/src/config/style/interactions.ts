import type { TransformTarget } from '../../types/transform';

export const interactions = {
  hoverOpacity: 0.08,
  selectedOpacity: 0.16,
  disabledOpacity: 0.3,
} as const satisfies TransformTarget;
