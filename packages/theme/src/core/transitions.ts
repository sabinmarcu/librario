import moize from 'moize';
import type {
  TransitionFromParam,
  TransitionParam,
  TransitionsDefinition,
  TransitionsFromParams,
  TransitionsPropsOf,
  TransitionsStyleOf,
  TransitionStringFromParam,
  TransitionGenerator,
  TransitionsResult,
} from '../types/transitions';
import { toKebabCase } from '../utils/css';
import {
  propsOfTransform,
  styleOfTransform,
} from './transform';

export const withoutDefaults = moize(
  <
    Transitions extends TransitionsDefinition,
  >(
    { easing, duration }: Transitions,
  ) => ({
    easing,
    duration,
  }),
);

export const styleOfTransitions = moize(
  <
    Transitions extends TransitionsDefinition,
  >(
    transitions: Transitions,
  ): TransitionsStyleOf<Transitions> => {
    const style = styleOfTransform(
      'transitions',
      withoutDefaults(transitions),
    );

    return Object.entries(style)
      .map<[string, string]>(([k, v]) => [
        k,
        typeof v === 'number' ? `${v}ms` : v as string,
      ])
      .reduce(
        (acc, [k, v]) => ({
          ...acc,
          [k]: v,
        }),
        {},
      ) as any;
  },
);

export const propsOfTransitions = moize(
  <
    Transitions extends TransitionsDefinition,
  >(
    transitions: Transitions,
  ): TransitionsPropsOf<Transitions> => propsOfTransform(
    'transitions',
    withoutDefaults(transitions),
  ) as any,
);

export const normalizeTransitionParam = <
  Transitions extends TransitionsDefinition,
  Param extends Readonly<TransitionParam<Transitions>>,
>(
  transitions: Transitions,
  param: Param,
): TransitionFromParam<Transitions, Param> => {
  const {
    defaults: { easing: defaultEasing, duration: defaultDuration },
  } = transitions;
  if (Array.isArray(param)) {
    const {
      easing: easingsDef,
      duration: durationsDef,
    } = transitions;
    const [easings, durations] = [Object.keys(easingsDef), Object.keys(durationsDef)];
    if (param.length === 2) {
      const [property, value] = param;
      if (durations.includes(value as any)) {
        return [toKebabCase(property), value, 0, defaultEasing] as any;
      }
      return [toKebabCase(property), defaultDuration, 0, value] as any;
    } if (param.length === 3) {
      const [property, value, value2] = param;
      if (easings.includes(value2 as any)) {
        return [toKebabCase(property), value, 0, value2] as any;
      }
      return [toKebabCase(property), value, value2, defaultEasing] as any;
    }
    return [toKebabCase(param[0]), ...param.slice(1)] as any;
  }
  return [toKebabCase(param as unknown as string), defaultDuration, 0, defaultEasing] as any;
};

export const transitionFromParam = <
  Transitions extends TransitionsDefinition,
  Param extends Readonly<TransitionParam<Transitions>>,
>(
  transitions: Transitions,
  param: Param,
): TransitionStringFromParam<Transitions, Param> => {
  const [property, duration, delay, easing] = normalizeTransitionParam(transitions, param);
  const props = propsOfTransitions(transitions) as any;
  return [
    property,
    props.duration[duration],
    `${delay}ms`,
    props.easing[easing],
  ].join(' ') as any;
};

export const transitionsFromParams = <
  Transitions extends TransitionsDefinition,
  Params extends Readonly<TransitionParam<Transitions>>[],
>(
  transitions: Transitions,
  ...params: Params
): TransitionsFromParams<Transitions, Params> => (
  params.map((it) => transitionFromParam(transitions, it))
    .join(', ') as any
);

export const transitionsGeneratorOf = <
  Transitions extends TransitionsDefinition,
>(
  transitions: Transitions,
): TransitionGenerator<Transitions> => (
  ...params
) => transitionsFromParams(transitions, ...params);

export const compileTransitions = <
  Transitions extends TransitionsDefinition,
>(
  transitions: Transitions,
): TransitionsResult<Transitions> => ({
  style: styleOfTransitions(transitions),
  props: propsOfTransitions(transitions),
  generator: transitionsGeneratorOf(transitions),
});
