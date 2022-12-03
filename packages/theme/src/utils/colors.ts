import { parseToHsl } from 'polished';
import type { HslaColor } from 'polished/lib/types/color';
import type { HSLColor } from '../types/colors';

export const isHslColor = (value: unknown): value is HSLColor => (
  typeof value === 'string' && /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/.test(value)
);

export const toHsl = (color: string): HSLColor => {
  const {
    hue,
    saturation,
    lightness,
    alpha,
  } = parseToHsl(color) as HslaColor;
  return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%, ${typeof alpha === 'undefined' ? 100 : alpha}%)`;
};
