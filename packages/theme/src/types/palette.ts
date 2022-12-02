import type { UnionToIntersection } from 'type-fest';
import type { HSLColor } from './colors';
import type {
  CSSVariableOf,
  CSSVarStatementOf,
} from './css';

export type ColorGenerator = (color: HSLColor) => HSLColor;

export type CSSColorVariableOf<
  Input extends string,
> = CSSVariableOf<`color-${Input}`>;

export interface IPaletteGenerator {
  [key: string]: ColorGenerator;
}

export type PaletteGenerator<
  Variants extends string,
> = {
  [Name in Variants]: ColorGenerator
};

export type PaletteVariant<
  Palette extends string,
  Variant extends string,
> = `${Palette}-${Variant}`;

export type StyleOfGenerator<
  Name extends string,
  Generator extends IPaletteGenerator,
> = Generator extends PaletteGenerator<infer Variants>
  ? {
    [Variant in Variants as CSSColorVariableOf<PaletteVariant<Name, Variant>>]:
    ReturnType<Generator[Variant]>;
  }
  : never;

export type PaletteOfGenerator<
  Name extends string,
  Generator extends IPaletteGenerator,
> = Generator extends PaletteGenerator<infer Variants>
  ? {
    [Variant in Variants]: CSSVarStatementOf<CSSColorVariableOf<PaletteVariant<Name, Variant>>>
  }
  : never;

export type PaletteSliceOfGenerator<
  Name extends string,
  Generator extends IPaletteGenerator,
> = {
  [key in Name]: PaletteOfGenerator<key, Generator>
};

export type PaletteSet = Record<string, IPaletteGenerator>;

export type StyleOf<
  Set extends PaletteSet,
> = Set extends Record<infer Names extends string, any>
  ? UnionToIntersection<
    {
      [Name in Names]: StyleOfGenerator<Name, Set[Name]>
    }[Names]
  >
  : never;

export type PaletteOf<
  Set extends PaletteSet,
> = Set extends Record<infer Names extends string, any>
  ? {
    [Name in Names]: PaletteOfGenerator<Name, Set[Name]>
  }
  : never;

export type InputOf<
  Set extends PaletteSet,
> = Set extends Record<infer Names extends string, any>
  ? {
    [Name in Names]: HSLColor
  }
  : never;
