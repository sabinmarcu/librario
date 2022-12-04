import {
  lighten,
  parseToHsl,
} from 'polished';
import type { HSLColor } from '../../types/colors';
import type { IPaletteGenerator } from '../../types/palette';
import { toHsl } from '../../utils/colors';

export const lightenInput = (
  percent: number,
) => (
  color: HSLColor,
) => {
  const hsl = parseToHsl(color);
  const { lightness } = hsl;
  return lightness > 0.5
    ? toHsl(lighten(0 - percent, color))
    : toHsl(lighten(percent, color));
};
export const textColors = {
  main: (color) => color,
  secondary: lightenInput(0.2),
  muted: lightenInput(0.4),
} as const satisfies IPaletteGenerator;
