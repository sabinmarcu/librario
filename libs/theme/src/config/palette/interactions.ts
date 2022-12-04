import { parseToHsl } from 'polished';
import type { HSLColor } from '../../types/colors';
import type { IPaletteGenerator } from '../../types/palette';
import { interactions } from '../style/interactions';

const transparent = (color: HSLColor, to: number): HSLColor => {
  const { hue, saturation, lightness } = parseToHsl(color);
  return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%, ${to}%)`;
};

const contrastTransparent = (color: HSLColor, to: number): HSLColor => {
  const { hue, saturation, lightness } = parseToHsl(color);
  return `hsl(${hue}, ${saturation * 100}%, ${100 - lightness * 100}%, ${to}%)`;
};

export const interactionsColors = {
  main: (color) => color,
  contrastMain: (color) => contrastTransparent(color, 100),
  hover: (color) => transparent(color, interactions.hoverOpacity * 100),
  selected: (color) => transparent(color, interactions.selectedOpacity * 100),
  disabled: (color) => transparent(color, interactions.disabledOpacity * 100),
  contrastHover: (color) => contrastTransparent(color, interactions.hoverOpacity * 100),
  contrastSelected: (color) => contrastTransparent(color, interactions.selectedOpacity * 100),
  contrastDisabled: (color) => contrastTransparent(color, interactions.disabledOpacity * 100),
} as const satisfies IPaletteGenerator;
