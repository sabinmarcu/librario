import type {
  KebabCase,
} from 'type-fest';

export type CSSVariableOf<
  Name extends string,
> = `--${KebabCase<Name>}`;

export type CSSVariable = `--${string}`;

export type CSSVarStatementOf<
  Variable extends CSSVariable,
> = `var(${Variable})`;

export type CSSVarStatement = `var(${CSSVariable})`;

export type CSSProperty = keyof CSSStyleDeclaration;

export type IPixels = `${number}px`;
export type PixelsOf<
  Input extends number,
> = `${Input}px`;

export type IMilliseconds = `${number}ms`;
export type MillisecondsOf<
  Input extends number,
> = `${Input}ms`;
