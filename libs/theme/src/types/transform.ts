import type {
  Join,
  KebabCase,
  Simplify,
  UnionToIntersection,
} from 'type-fest';
import type { SimplifyDeep } from 'type-fest/source/merge-deep';
import type {
  CSSVariableOf,
  CSSVarStatementOf,
} from './css';
import type {
  OmitNever,
  TuplifyUnion,
} from './utils';

export type TransformTargetPrimitiveValue = string | number;
export type TransformTargetValue = Record<string, TransformTargetPrimitiveValue>;
export type TransformTarget = Record<string, TransformTargetPrimitiveValue | TransformTargetValue>;

export type CSSTransformTargetValueVariableOf<
  Name extends string,
  Target extends TransformTargetPrimitiveValue,
> = CSSVariableOf<`${Name}-${Target}`>;

export type TransformTargetPrimitiveValueOrNever<
  Target extends TransformTargetPrimitiveValue | TransformTargetValue,
> = Target extends TransformTargetPrimitiveValue
  ? Target
  : never;
export type TransformTargetPrimitivesOfRaw<
  Target extends TransformTarget,
> = OmitNever<{
  [Key in keyof Target]: TransformTargetPrimitiveValueOrNever<Target[Key]>;
}>;
export type TransformTargetPrimitivesOf<
  Target extends TransformTarget,
  Result = TransformTargetPrimitivesOfRaw<Target>,
> = [Result] extends [never]
  ? {}
  : Result;

export type TransformTargetValueOrNever<
  Target extends TransformTargetPrimitiveValue | TransformTargetValue,
> = Target extends TransformTargetValue
  ? Target
  : never;
export type TransformTargetValuesOfRaw<
  Target extends TransformTarget,
> = OmitNever<{
  [Key in keyof Target]: TransformTargetValueOrNever<Target[Key]>;
}>;
export type TransformTargetValuesOf<
  Target extends TransformTarget,
  Result = TransformTargetValuesOfRaw<Target>,
> = [Result] extends [never]
  ? {}
  : Simplify<Result>;

export type TransformTargetPrimitivesStyleOf<
  Name extends string,
  Target extends TransformTarget,
  Primitives = TransformTargetPrimitivesOf<Target>,
> = Simplify<
  {
    [Key in keyof Primitives
    as CSSTransformTargetValueVariableOf<Name, Key & TransformTargetPrimitiveValue>
    ]: Primitives[Key];
  }
>;

export type TransformTargetPrimitivesPropsOf<
  Name extends string,
  Target extends TransformTarget,
  Primitives = TransformTargetPrimitivesOf<Target>,
> = {
  [Key in keyof Primitives]: CSSVarStatementOf<
    CSSTransformTargetValueVariableOf<
      Name,
      Key & TransformTargetPrimitiveValue
    >
  >;
};

export type TransformTargetValuesStyleOf<
  Name extends string,
  Target extends TransformTarget,
  Values = TransformTargetValuesOf<Target>,
> = Simplify<
  UnionToIntersection<
    {
      [Key in keyof Values]: Values[Key] extends TransformTarget
        ? TransformTargetPrimitivesStyleOf<`${Name}-${Key & string}`, Values[Key]>
        : never;
    }[keyof Values]
  >
>;

export type TransformTargetValuesPropsOf<
  Name extends string,
  Target extends TransformTarget,
  Values = TransformTargetValuesOf<Target>,
> = SimplifyDeep<
  {
    [Key in keyof Values]: Values[Key] extends TransformTarget
      ? TransformTargetPrimitivesPropsOf<`${Name}-${Key & string}`, Values[Key]>
      : never;
  }
>;

export type PropToMixin<
  Name extends string,
  Value extends string,
> = `${KebabCase<Name>}: ${Value};`;

export type TransformTargetValueMixinsOf<
  Target extends Record<string, string>,
  Tuple = TuplifyUnion<
    {
      [Key in keyof Target]: PropToMixin<Key & string, Target[Key] & string>;
    }[keyof Target]
  >,
> = Tuple extends string[]
  ? Join<Tuple, ' '>
  : never;

export type TransformTargetMixinsOf<
  Name extends string,
  Target extends TransformTarget,
  Props = TransformTargetValuesPropsOf<Name, Target>,
> = {
  [Key in keyof Props]: Props[Key] extends Record<string, string>
    ? TransformTargetValueMixinsOf<Props[Key]>
    : never;
};

export type TransformTargetStyleOf<
  Name extends string,
  Target extends TransformTarget,
> = Simplify<
  & TransformTargetPrimitivesStyleOf<Name, Target>
  & TransformTargetValuesStyleOf<Name, Target>
>;

export type TransformTargetPropsOf<
  Name extends string,
  Target extends TransformTarget,
> = SimplifyDeep<
  & TransformTargetPrimitivesPropsOf<Name, Target>
  & TransformTargetValuesPropsOf<Name, Target>
>;

export type TransformTargetResults<
  Name extends string,
  Target extends TransformTarget,
> = SimplifyDeep<
  {
    style: TransformTargetStyleOf<Name, Target>;
    props: TransformTargetPropsOf<Name, Target>;
    mixins: TransformTargetMixinsOf<Name, Target>;
  }
>;

export type TransformSet = Record<string, TransformTarget>;

export type TransformSetItemResult<
  Name extends string,
  Target extends TransformTarget,
  Result extends Record<'style' | 'props' | 'mixins', any> = TransformTargetResults<Name, Target>,
> = {
  style: Result['style'];
  props: { [Key in Name]: Result['props'] };
  mixins: { [Key in Name]: Result['mixins'] };
};

export type TransformSetResults<
  Set extends TransformSet,
> = SimplifyDeep<
  UnionToIntersection<
    {
      [Key in keyof Set]: TransformSetItemResult<Key & string, Set[Key]>;
    }[keyof Set]
  >
>;
