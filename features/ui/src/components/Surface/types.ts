import type { Theme } from '@librario/theme';
import type { HTMLAttributes } from 'react';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: keyof Theme['shadows'];
}
