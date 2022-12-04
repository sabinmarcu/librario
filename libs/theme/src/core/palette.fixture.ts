import type { HSLColor } from '../types/colors';
import type {
  InputOf,
  PaletteSet,
} from '../types/palette';

export const paletteTest = {
  primary: {
    main: (color) => color,
    lighter: (color) => `lighter(${color})` as unknown as HSLColor,
  },
  secondary: {
    main: (color) => color,
    darker: (color) => `darker(${color})` as unknown as HSLColor,
  },
} as const satisfies PaletteSet;

export type TestPalette = typeof paletteTest;

export const paletteInput = {
  primary: 'hsl(100, 100%, 50%)',
  secondary: 'hsl(200, 100%, 50%)',
} as const satisfies InputOf<TestPalette>;

export const paletteVariables = {
  primary: {
    main: 'var(--color-primary-main)',
    lighter: 'var(--color-primary-lighter)',
  },
  secondary: {
    main: 'var(--color-secondary-main)',
    darker: 'var(--color-secondary-darker)',
  },
} as const;

export const paletteStyles = {
  primary: {
    '--color-primary-main': 'hsl(100, 100%, 50%)',
    '--color-primary-lighter': 'lighter(hsl(100, 100%, 50%))',
  },
  secondary: {
    '--color-secondary-main': 'hsl(200, 100%, 50%)',
    '--color-secondary-darker': 'darker(hsl(200, 100%, 50%))',
  },
} as const;

export const paletteSlices = {
  primary: {
    primary: paletteVariables.primary,
  },
  secondary: {
    secondary: paletteVariables.secondary,
  },
} as const;
