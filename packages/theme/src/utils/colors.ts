import { parseToHsl } from 'polished';
import type { HSLColor } from '../types/colors';

export const isHslColor = (value: unknown): value is HSLColor => (
  typeof value === 'string' && /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/.test(value)
);

export const toHsl = (color: string): HSLColor => {
  const { hue, saturation, lightness } = parseToHsl(color);
  return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%)`;
};
