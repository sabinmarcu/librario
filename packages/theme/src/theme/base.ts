import { createCustomTheme } from '../config/theme';
import type { TransformTarget } from '../types/transform';

export const createTheme = createCustomTheme(
  ({
    palette: {
      primary: {
        main: primaryMain,
        contrastText: primaryContrastText,
      },
      secondary: {
        main: secondaryMain,
        contrastText: secondaryContrastText,
      },
    },
  }) => ({
    primaryBackground: {
      color: primaryContrastText,
      backgroundColor: primaryMain,
    },
    secondaryBackground: {
      color: secondaryContrastText,
      backgroundColor: secondaryMain,
    },
  } satisfies TransformTarget),
);

export type ThemeType = ReturnType<typeof createTheme>;
export type Theme = ThemeType['theme'];
export type ThemeStyle = ThemeType['style'];
