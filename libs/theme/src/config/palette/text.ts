import {
  lighten,
  parseToHsl,
} from 'polished';
import type { IPaletteGenerator } from '../../types/palette';
import { toHsl } from '../../utils/colors';

export const textColors = {
  main: (color) => color,
  secondary: (color) => {
    const hsl = parseToHsl(color);
    const { lightness } = hsl;
    const percent = 0.2;
    return lightness > 0.5
      ? toHsl(lighten(0 - percent, color))
      : toHsl(lighten(percent, color));
  },
} as const satisfies IPaletteGenerator;
