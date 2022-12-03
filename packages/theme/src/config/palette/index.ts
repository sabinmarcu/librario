import { genericColors } from './generic';
import { backgroundColors } from './background';
import { textColors } from './text';
import type { PaletteSet } from '../../types/palette';
import { interactionsColors } from './interactions';

export const palette = {
  // color variants
  primary: genericColors,
  secondary: genericColors,

  // status colors
  success: genericColors,
  warning: genericColors,
  error: genericColors,
  info: genericColors,
} as const satisfies PaletteSet;

export const colors = {
  // background colors
  background: backgroundColors,

  // text colors
  text: textColors,

  // interactions colors
  interactions: interactionsColors,
} as const satisfies PaletteSet;

export type Palette = typeof palette & typeof colors;
