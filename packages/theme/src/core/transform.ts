import moize from 'moize';
import type {
  TransformTargetMixinsOf,
  PropToMixin,
  TransformTarget,
  TransformTargetPrimitivesOf,
  TransformTargetPrimitivesPropsOf,
  TransformTargetPrimitivesStyleOf,
  TransformTargetValueMixinsOf,
  TransformTargetValuesOf,
  TransformTargetValuesPropsOf,
  TransformTargetValuesStyleOf,
  TransformTargetStyleOf,
  TransformTargetPropsOf,
  TransformTargetResults,
  TransformSet,
  TransformSetResults,
} from '../types/transform';
import {
  cssVariableOf,
  cssVariableStatement,
  toKebabCase,
} from '../utils/css';

export const primitivesOfTransform = moize(
  <
    Input extends TransformTarget,
  >(
    input: Input,
  ): TransformTargetPrimitivesOf<Input> => {
    const result = Object.entries(input)
      .filter(([,value]) => !(typeof value === 'object'))
      .reduce<TransformTargetPrimitivesOf<Input>>(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {} as any,
      );
    return result;
  },
);

export const valuesOfTransform = moize(
  <
    Input extends TransformTarget,
  >(
    input: Input,
  ): TransformTargetValuesOf<Input> => {
    const result = Object.entries(input)
      .filter(([,value]) => typeof value === 'object')
      .reduce<TransformTargetValuesOf<Input>>(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {} as any,
      );
    return result;
  },
);

export const primitiveStyleOfTransform = moize(
  <
    Name extends string,
    Input extends TransformTarget,
  >(
    name: Name,
    input: Input,
  ): TransformTargetPrimitivesStyleOf<Name, Input> => {
    const primitives = primitivesOfTransform(input);
    const result = Object.entries(primitives)
      .map<[string, any]>(([key, value]) => [
        cssVariableOf(toKebabCase(`${name}-${key}`)),
        value,
      ])
      .reduce<TransformTargetPrimitivesStyleOf<Name, Input>>(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {} as any,
      );
    return result;
  },
);

export const primitivePropsOfTransform = moize(
  <
    Name extends string,
    Input extends TransformTarget,
  >(
    name: Name,
    input: Input,
  ): TransformTargetPrimitivesPropsOf<Name, Input> => {
    const primitives = primitivesOfTransform(input);
    const result = Object.keys(primitives)
      .map<[string, string]>((key) => [
        key,
        cssVariableStatement(cssVariableOf(toKebabCase(`${name}-${key}`))),
      ])
      .reduce<TransformTargetPrimitivesPropsOf<Name, Input>>(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {} as any,
      );
    return result;
  },
);

export const valuesStyleOfTransform = moize(
  <
    Name extends string,
    Input extends TransformTarget,
  >(
    name: Name,
    input: Input,
  ): TransformTargetValuesStyleOf<Name, Input> => {
    const values = valuesOfTransform(input);
    const result = Object.entries(values)
      .map<Record<string, string>>(([key, set]) => (
        primitiveStyleOfTransform(`${name}-${key}`, set as any) as any
      ))
      .reduce<TransformTargetValuesStyleOf<Name, Input>>(
        (acc, partial) => ({
          ...acc,
          ...partial,
        }),
        {} as any,
      );
    return result;
  },
);

export const valuesPropsOfTransform = moize(
  <
    Name extends string,
    Input extends TransformTarget,
  >(
    name: Name,
    input: Input,
  ): TransformTargetValuesPropsOf<Name, Input> => {
    const values = valuesOfTransform(input);
    const result = Object.entries(values)
      .reduce<TransformTargetValuesPropsOf<Name, Input>>(
        (acc, [key, set]) => ({
          ...acc,
          [key]: primitivePropsOfTransform(`${name}-${key}`, set as any),
        }),
        {} as any,
      );
    return result;
  },
);

export const propToMixin = <
  Name extends string,
  Value extends string,
>(
  name: Name,
  value: Value,
): PropToMixin<Name, Value> => `${toKebabCase(name)}: ${value};`;

export const mixinOfValues = <
  Values extends Record<string, string>,
>(
  input: Values,
): TransformTargetValueMixinsOf<Values> => {
  const result = Object.entries(input)
    .map(([key, value]) => propToMixin(key, value))
    .join(' ') as any;
  return result;
};

export const mixinsOfTransform = <
  Name extends string,
  Input extends TransformTarget,
>(
  name: Name,
  input: Input,
): TransformTargetMixinsOf<Name, Input> => {
  const props = valuesPropsOfTransform(name, input);
  const result = Object.entries<Record<string, string>>(props)
    .reduce<TransformTargetMixinsOf<Name, Input>>(
      (acc, [key, value]) => ({
        ...acc,
        [key]: mixinOfValues(value),
      }),
      {} as any,
    );
  return result;
};

export const styleOfTransform = <
  Name extends string,
  Input extends TransformTarget,
>(
  name: Name,
  input: Input,
): TransformTargetStyleOf<Name, Input> => ({
  ...primitiveStyleOfTransform(name, input),
  ...valuesStyleOfTransform(name, input),
});

export const propsOfTransform = <
  Name extends string,
  Input extends TransformTarget,
>(
  name: Name,
  input: Input,
): TransformTargetPropsOf<Name, Input> => ({
  ...primitivePropsOfTransform(name, input),
  ...valuesPropsOfTransform(name, input),
}) as any;

export const compileTransform = <
  Name extends string,
  Input extends TransformTarget,
>(
  name: Name,
  input: Input,
): TransformTargetResults<Name, Input> => ({
  style: styleOfTransform(name, input),
  props: propsOfTransform(name, input),
  mixins: mixinsOfTransform(name, input),
}) as any;

export const compileTransformSet = <
  Set extends TransformSet,
>(
  set: Set,
): TransformSetResults<Set> => {
  const result = Object.entries(set)
    .reduce<TransformSetResults<Set>>(
      (acc: any, [key, value]) => {
        const { style, props, mixins } = compileTransform(key, value);
        return {
          ...acc,
          style: {
            ...acc.style,
            ...style,
          },
          props: {
            ...acc.props,
            [key]: props,
          },
          mixins: {
            ...acc.mixins,
            [key]: mixins,
          },
        };
      },
      { style: {}, props: {}, mixins: {} } as any,
    );
  return result;
};
