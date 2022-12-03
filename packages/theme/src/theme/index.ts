import type { ThemeType } from './base';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type ThemeVariant = 'light' | 'dark';
export type ThemeSelection = 'system' | ThemeVariant;
export type ThemeSet = Record<ThemeVariant, ThemeType>;

export const themeSet = {
  light: lightTheme,
  dark: darkTheme,
} as const satisfies ThemeSet;

export const { theme } = lightTheme;

export * from './base';
