import moize from 'moize';
import type {
  BetweenBreakpointsType,
  BreakpointFromOrientation,
  Breakpoints,
  BreakpointsPropsOf,
  BreakpointsResult,
  BreakpointsStyleOf,
  CSSBreakpointVariableOf,
  GreaterThanBreakpointsType,
  LowerThanBreakpointsType,
  MaxWidthType,
  MediaQueryBuilder,
  MediaQueryBuilderFactory,
  MinWidthType,
  ModifiersType,
  OrientationType,
  QueryBuilder,
} from '../types/breakpoints';
import type {
  CSSVarStatement,
  PixelsOf,
} from '../types/css';
import {
  cssVariableOf,
} from '../utils/css';

export const cssBreakpointVariableOf = <
  Input extends string,
>(input: Input): CSSBreakpointVariableOf<Input> => (
  cssVariableOf(`breakpoint-${input}`)
);

export const pixelsOf = <
  Input extends number,
>(input: Input): PixelsOf<Input> => `${input}px`;

export const breakpointsStyleOf = moize(
  <
    BPs extends Breakpoints,
  >(breakpoints: BPs): BreakpointsStyleOf<BPs> => {
    const style = Object.entries(breakpoints)
      .reduce<BreakpointsStyleOf<BPs>>(
        (acc, [name, value]) => {
          const key = cssBreakpointVariableOf(name);
          const pixels = pixelsOf(value);
          return {
            ...acc,
            [key]: pixels,
          };
        },
        {} as any,
      );
    return style;
  },
);

export const breakpointsPropsOf = moize(
  <
    BPs extends Breakpoints,
  >(breakpoints: BPs): BreakpointsPropsOf<BPs> => {
    const style = Object.entries(breakpoints)
      .reduce<BreakpointsPropsOf<BPs>>(
        (acc, [key, value]) => {
          const pixels = pixelsOf(value);
          return {
            ...acc,
            [key]: pixels,
          };
        },
        {} as any,
      );
    return style;
  },
);

export const breakpointsOf = moize(
  <
    BPs extends Breakpoints,
  >(breakpoints: BPs): BreakpointsResult<BPs> => {
    const style = breakpointsStyleOf(breakpoints);
    const props = breakpointsPropsOf(breakpoints);
    const result = {
      style,
      props,
    };
    return result;
  },
);

export const minWidthQuery = <
  Breakpoint extends CSSVarStatement,
>(
  breakpoint: Breakpoint,
): MinWidthType<Breakpoint> => (
  `(min-width: ${breakpoint})`
);

export const maxWidthQuery = <
  Breakpoint extends CSSVarStatement,
>(
  breakpoint: Breakpoint,
): MaxWidthType<Breakpoint> => (
  `(max-width: ${breakpoint})`
);

export const lowerThanQuery = <
  BPs extends Breakpoints,
  Point extends keyof BPs,
>(
  breakpoints: BPs,
  point: Point,
): LowerThanBreakpointsType<BPs, Point> => {
  const props = breakpointsPropsOf(breakpoints);
  const query = maxWidthQuery(props[point]) as any;
  return query;
};

export const greaterThanQuery = <
  BPs extends Breakpoints,
  Point extends keyof BPs,
>(
  breakpoints: BPs,
  point: Point,
): GreaterThanBreakpointsType<BPs, Point> => {
  const props = breakpointsPropsOf(breakpoints);
  const query = minWidthQuery(props[point]) as any;
  return query;
};

export const betweenQuery = <
  BPs extends Breakpoints,
  Start extends keyof BPs,
  End extends keyof BPs,
>(
  breakpoints: BPs,
  start: Start,
  end: End,
): BetweenBreakpointsType<BPs, Start, End> => {
  const query = [
    greaterThanQuery(breakpoints, start),
    lowerThanQuery(breakpoints, end),
  ].join(' and ') as any;
  return query;
};

export const orientationQuery = <
  Orientation extends OrientationType,
>(
  orientation: Orientation,
): BreakpointFromOrientation<Orientation> => `(orientation: ${orientation})`;

export const queryModifiers = [
  'only', 'not',
] as const satisfies Readonly<ModifiersType[]>;

export const queryBuilderFrom = moize(
  <
    BPs extends Breakpoints,
  >(breakpoints: BPs): QueryBuilder<BPs> => (
    ...queries
  ) => queries.map(
    (query) => {
      if (typeof query !== 'string') {
        if ('between' in query) {
          const { between: [start, end] } = query;
          return betweenQuery(breakpoints, start, end);
        }
        if ('lowerThan' in query) {
          const { lowerThan } = query;
          return lowerThanQuery(breakpoints, lowerThan);
        }
        if ('greaterThan' in query) {
          const { greaterThan } = query;
          return greaterThanQuery(breakpoints, greaterThan);
        }
      }
      return query;
    },
  ).reduce(
    (acc, it, idx, arr) => {
      if (idx === 0) {
        return it;
      }
      if (queryModifiers.includes(arr[idx - 1] as any)) {
        return `${acc} ${it}`;
      }
      return `${acc} and ${it}`;
    },
    '' as any,
  ),
);

export const mediaQueryBuilderFrom = moize(
  <
    BPs extends Breakpoints,
  >(breakpoints: BPs): MediaQueryBuilder<BPs> => (
    media,
    ...queries
  ) => {
    if (queries.length === 0) {
      return '' as any;
    }
    const queryBuilder = queryBuilderFrom(breakpoints);
    return `@${media} ${queryBuilder(...queries)}`;
  },
);

export const compileBreakpoints: MediaQueryBuilderFactory = (
  breakpoints,
) => {
  const mediaQueryFunction = mediaQueryBuilderFrom(breakpoints);
  const queryFunction = queryBuilderFrom(breakpoints);
  const theme = breakpointsOf(breakpoints);
  return {
    mediaQueryFunction,
    queryFunction,
    theme,
  };
};
