import type { HSLColor } from '../types/colors';
import type {
  CSSColorVariableOf,
  InputOf,
  IPaletteGenerator,
  PaletteOf,
  PaletteOfGenerator,
  PaletteSet,
  PaletteSliceOfGenerator,
  StyleOf,
  StyleOfGenerator,
} from '../types/palette';
import {
  cssVariableOf,
  cssVariableStatement,
} from '../utils/css';

export const cssColorVariableOf = <
  Input extends string,
>(input: Input): CSSColorVariableOf<Input> => (
  cssVariableOf(`color-${input}`)
);

export const compileGeneratorStyle = <
  Name extends string,
  Generator extends IPaletteGenerator,
>(
  name: Name,
  generator: Generator,
  color: HSLColor,
): StyleOfGenerator<Name, Generator> => {
  const style = Object.entries(generator)
    .reduce<StyleOfGenerator<Name, Generator>>(
      (acc, [variant, fn]) => {
        const key = cssColorVariableOf(`${name}-${variant}`);
        const value = fn(color);
        return {
          ...acc,
          [key]: value,
        };
      },
      {} as any,
    );
  return style;
};

export const compileGeneratorPalette = <
  Name extends string,
  Generator extends IPaletteGenerator,
>(
  name: Name,
  generator: Generator,
): PaletteOfGenerator<Name, Generator> => {
  const palette = Object.keys(generator)
    .reduce<PaletteOfGenerator<Name, Generator>>(
      (acc, variant) => {
        const value = cssVariableStatement(cssColorVariableOf(`${name}-${variant}`));
        return {
          ...acc,
          [variant]: value,
        };
      },
      {} as any,
    );
  return palette;
};

export const compileGeneratorPaletteSlice = <
  Name extends string,
  Generator extends IPaletteGenerator,
>(
  name: Name,
  generator: Generator,
): PaletteSliceOfGenerator<Name, Generator> => ({
  [name]: compileGeneratorPalette(name, generator),
} as any);

export const compilePaletteSet = <
  Set extends PaletteSet,
>(
  set: Set,
  input: InputOf<Set>,
) => {
  const [style, palette] = Object.entries(set)
    .reduce<
      [StyleOf<Set>, PaletteOf<Set>]
    >(
      ([oldStyle, oldPalette], [name, generator]) => {
        const newStyle = {
          ...oldStyle,
          ...compileGeneratorStyle(name, generator, input[name]),
        };
        const newPalette = {
          ...oldPalette,
          ...compileGeneratorPaletteSlice(name, generator),
        };
        return [
          newStyle,
          newPalette,
        ];
      },
      [{} as any, {} as any],
    );
  return { style, palette };
};
