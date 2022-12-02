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
    return lightness > 0.5
      ? toHsl(lighten(-0.045, color))
      : toHsl(lighten(0.045, color));
  },
} as const satisfies IPaletteGenerator;
