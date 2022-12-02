import { genericColors } from './generic';
import { backgroundColors } from './background';
import { textColors } from './text';
import type { PaletteSet } from '../../types/palette';

export const palette = {
  // color variants
  primary: genericColors,
  secondary: genericColors,

  // status colors
  success: genericColors,
  warning: genericColors,
  error: genericColors,
  info: genericColors,

  // background colors
  background: backgroundColors,

  // text colors
  text: textColors,
} as const satisfies PaletteSet;

export type Palette = typeof palette;
