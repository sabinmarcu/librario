import type { Palette } from './palette/index';
import {
  palette as paletteSet,
  colors as colorsSet,
} from './palette/index';
import { staticStyles } from './style/index';
import type { InputOf } from '../types/palette';
import type { TransformTarget } from '../types/transform';
import { compilePaletteSet } from '../core/palette';
import { compileTransformSet } from '../core/transform';
import { compileBreakpoints } from '../core/breakpoints';
import { breakpoints } from './breakpoints';
import { transitions } from './transitions';
import { compileTransitions } from '../core/transitions';

export const createRawTheme = () => {
  const { style: staticStyle, props: transformProps, mixins } = compileTransformSet(staticStyles);
  const {
    theme: {
      style: breakpointsStyle,
      props: breakpointsProps,
    },
    mediaQueryFunction,
    queryFunction,
  } = compileBreakpoints(breakpoints);
  const {
    style: transitionsStyle,
    props: transitionsProps,
    generator: transitionsGenerator,
  } = compileTransitions(transitions);

  const style = {
    ...staticStyle,
    ...breakpointsStyle,
    ...transitionsStyle,
  } as const;

  const theme = {
    ...transformProps,
    breakpoints: {
      ...breakpointsProps,
      query: queryFunction,
      mediaQuery: mediaQueryFunction,
    },
    transition: {
      ...transitionsProps,
      create: transitionsGenerator,
    },
    mixins,
  } as const;

  return { style, theme };
};

export type RawTheme = ReturnType<typeof createRawTheme>;

export const createTheme = (
  input: InputOf<Palette>,
) => {
  const { style: paletteStyle, palette } = compilePaletteSet(paletteSet, input);
  const { style: colorsStyle, palette: colors } = compilePaletteSet(colorsSet, input);
  const { style, theme } = createRawTheme();
  return {
    style: {
      ...style,
      ...paletteStyle,
      ...colorsStyle,
    },
    theme: {
      ...theme,
      palette,
      colors,
    },
  };
};

export type Theme = ReturnType<typeof createTheme>['theme'];

export const createCustomTheme = <
  Result extends TransformTarget,
>(
  mixinGenerator: (theme: Theme) => Result,
) => (input: InputOf<Palette>) => {
  const { style, theme } = createTheme(input);
  const { style: transformStyle, props: transformProps, mixins } = compileTransformSet(
    { custom: mixinGenerator(theme) },
  );
  return {
    style: {
      ...style,
      ...transformStyle,
    },
    theme: {
      ...theme,
      ...transformProps,
      mixins: {
        ...theme.mixins,
        ...mixins,
      },
    },
  };
};
