import type { Join } from 'type-fest';
import type {
  CSSProperty,
  MillisecondsOf,
} from './css';
import type {
  TransformTarget,
  TransformTargetPropsOf,
  TransformTargetStyleOf,
} from './transform';

export type EasingType = `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
export type TransitionsDefinition<
  Easings extends string = string,
  Durations extends string = string,
> = {
  easing: Record<Easings, EasingType>
  duration: Record<Durations, number>
  defaults: {
    easing: Easings,
    duration: Durations,
  }
};

export type TransitionsStyleOf<
  Transitions extends TransitionsDefinition,
  Set extends TransformTarget = Pick<Transitions, 'easing' | 'duration'>,
  Style = TransformTargetStyleOf<'transitions', Set>,
> = Style extends Record<string, string | number>
  ? {
    [Key in keyof Style]: (
      Style[Key] extends number
        ? MillisecondsOf<Style[Key]>
        : Style[Key]
    )
  }
  : never;

export type TransitionsPropsOf<
  Transitions extends TransitionsDefinition,
  Set extends TransformTarget = Pick<Transitions, 'easing' | 'duration'>,
> = TransformTargetPropsOf<'transitions', Set>;

export type TransitionParam<
  Transitions extends TransitionsDefinition,
  Easing = keyof Transitions['easing'],
  Duration = keyof Transitions['duration'],
> =
| CSSProperty
| [property: CSSProperty, duration: Duration]
| [property: CSSProperty, easing: Easing]
| [property: CSSProperty, duration: Duration, easing: Easing]
| [property: CSSProperty, duration: Duration, delay: number]
| [property: CSSProperty, duration: Duration, delay: number, easing: Easing];

export type TransitionFromParam<
  Transitions extends TransitionsDefinition,
  Param extends Readonly<TransitionParam<Transitions>>,
  Easing = keyof Transitions['easing'],
  Duration = keyof Transitions['duration'],
> = Param extends readonly [
  infer P extends CSSProperty,
  infer DR extends Duration,
  infer DL extends number,
  infer E extends Easing,
]
  ? [P, DR, DL, E]
  : Param extends readonly [
    infer P extends CSSProperty,
    infer DR extends Duration,
    infer E extends Easing,
  ]
    ? [P, DR, 0, E]
    : Param extends readonly [
      infer P extends CSSProperty,
      infer DR extends Duration,
      infer DL extends number,
    ]
      ? [P, DR, DL, Transitions['defaults']['easing']]
      : Param extends readonly [
        infer P extends CSSProperty,
        infer DR extends Duration,
      ]
        ? [P, DR, 0, Transitions['defaults']['easing']]
        : Param extends readonly [
          infer P extends CSSProperty,
          infer E extends Easing,
        ]
          ? [P, Transitions['defaults']['duration'], 0, E]
          : Param extends CSSProperty
            ? [Param, Transitions['defaults']['duration'], 0, Transitions['defaults']['easing']]
            : Param;

export type TransitionStringFromParam<
  Transitions extends TransitionsDefinition,
  Param extends Readonly<TransitionParam<Transitions>>,
  ResolvedParam = TransitionFromParam<Transitions, Param>,
  Easing extends string = keyof Transitions['easing'] & string,
  Duration extends string = keyof Transitions['duration'] & string,
  Props = TransitionsPropsOf<Transitions>,
> = Props extends { easing: Record<Easing, string>, duration: Record<Duration, string> }
  ? ResolvedParam extends [
    infer P extends string,
    infer D extends Duration,
    infer DL extends number,
    infer E extends Easing,
  ]
    ? `${P} ${Props['duration'][D]} ${MillisecondsOf<DL>} ${Props['easing'][E]}`
    : never
  : never;

export type TransitionsFromParams<
  Transitions extends TransitionsDefinition,
  Params extends Readonly<TransitionParam<Transitions>>[],
> = Join<
  {
    [P in keyof Params]: TransitionStringFromParam<Transitions, Params[P]>;
  },
  ', '
>;

export interface TransitionGenerator<
  Transitions extends TransitionsDefinition,
> {
  <
    Params extends Readonly<TransitionParam<Transitions>>[],
  >(...params: Params): TransitionsFromParams<Transitions, Params>
}

export type TransitionsResult<
  Transitions extends TransitionsDefinition,
> = {
  style: TransitionsStyleOf<Transitions>,
  props: TransitionsPropsOf<Transitions>,
  generator: TransitionGenerator<Transitions>
};
