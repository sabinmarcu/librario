import type { KebabCase } from 'type-fest';
import type {
  CSSVariable,
  CSSVariableOf,
  CSSVarStatementOf,
} from '../types/css';

export const toKebabCase = <
  Input extends string,
>(value: Input): KebabCase<Input> => (
  value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase() as KebabCase<Input>
);

export const cssVariableOf = <
  Input extends string,
>(name: Input): CSSVariableOf<Input> => (
  `--${toKebabCase(name)}`
);

export const isCssVariable = (input: unknown): input is CSSVariable => (
  typeof input === 'string' && /^--\w+(-\w+)*$/.test(input)
);

export const cssVariableStatement = <
  Input extends CSSVariable,
>(variable: Input): CSSVarStatementOf<Input> => (
  `var(${variable})`
);
