import type { TransformTarget } from '../../types/transform';

export const interactions = {
  hover: 'hsla(0, 0%, 100%, 0.08%)',
  selected: 'hsla(0, 0%, 100%, 0.16%)',
  disabled: 'hsla(0, 0%, 100%, 0.3%)',
} as const satisfies TransformTarget;
