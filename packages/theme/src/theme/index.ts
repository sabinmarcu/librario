import type { ThemeType } from './base';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type ThemeVariant = 'light' | 'dark';
export type ThemeSelection = 'system' | ThemeVariant;
export type ThemeSet = Record<ThemeVariant, ThemeType>;

export const theme = {
  light: lightTheme,
  dark: darkTheme,
} as const satisfies ThemeSet;

export * from './base';
