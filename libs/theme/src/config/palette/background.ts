import { lighten } from 'polished';
import type { IPaletteGenerator } from '../../types/palette';
import { toHsl } from '../../utils/colors';

export const backgroundColors = {
  main: (color) => color,
  paper: (color) => toHsl(lighten(0.15, color)),
  light: (color) => toHsl(lighten(0.3, color)),
} as const satisfies IPaletteGenerator;
