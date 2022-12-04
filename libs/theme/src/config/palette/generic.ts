import {
  lighten,
  parseToHsl,
} from 'polished';
import type { IPaletteGenerator } from '../../types/palette';
import { toHsl } from '../../utils/colors';

const black = 'hsl(0, 0%, 0%)';
const white = 'hsl(0, 0%, 100%)';

export const genericColors = {
  main: (color) => color,
  light: (color) => toHsl(lighten(0.045, color)),
  lighter: (color) => toHsl(lighten(0.069, color)),
  lightest: (color) => toHsl(lighten(0.136, color)),
  dark: (color) => toHsl(lighten(-0.045, color)),
  darker: (color) => toHsl(lighten(-0.068, color)),
  darkest: (color) => toHsl(lighten(-0.136, color)),
  contrastText: (color) => {
    const hsl = parseToHsl(color);
    const { lightness } = hsl;
    return lightness > 0.5 ? black : white;
  },
} as const satisfies IPaletteGenerator;
