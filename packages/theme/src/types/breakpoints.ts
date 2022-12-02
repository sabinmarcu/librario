import type {
  CSSVariableOf,
  CSSVarStatement,
  CSSVarStatementOf,
  PixelsOf,
} from './css';

export type Breakpoints = Record<string, number>;

export type CSSBreakpointVariableOf<
  Name extends string,
> = CSSVariableOf<`breakpoint-${Name}`>;

export type BreakpointsStyleOf<
  BPs extends Breakpoints,
> = {
  [Key in keyof BPs as CSSBreakpointVariableOf<Key & string>]: PixelsOf<BPs[Key & string]>
};

export type BreakpointsPropsOf<
  BPs extends Breakpoints,
> = {
  [Key in keyof BPs]: CSSVarStatementOf<CSSBreakpointVariableOf<Key & string>>
};

export type BreakpointsResult<
  BPs extends Breakpoints,
> = {
  style: BreakpointsStyleOf<BPs>;
  props: BreakpointsPropsOf<BPs>;
};

export type BetweenType<
  BPs extends Breakpoints,
  Start extends keyof BPs,
  End extends keyof BPs,
> = {
  between: [Start, End];
};
export type LowerThanType<
  BPs extends Breakpoints,
  Point extends keyof BPs,
> = {
  lowerThan: Point;
};
export type GreaterThanType<
  BPs extends Breakpoints,
  Point extends keyof BPs,
> = {
  greaterThan: Point;
};
export type BreakpointParamType<BPs extends Breakpoints> =
| BetweenType<BPs, keyof BPs, keyof BPs>
| LowerThanType<BPs, keyof BPs>
| GreaterThanType<BPs, keyof BPs>;

export type ModifiersType = 'only' | 'not';
export type MediumType = 'screen' | 'print';
export type OrientationType = 'portrait' | 'landscape';
export type MediaType = 'media' | 'content';

export type MinWidthType<
  Breakpoint extends CSSVarStatement,
> = `(min-width: ${Breakpoint})`;
export type MaxWidthType<
  Breakpoint extends CSSVarStatement,
> = `(max-width: ${Breakpoint})`;

export type PropOf<
  BPs extends Breakpoints,
  Point extends keyof BPs,
  Props = BreakpointsPropsOf<BPs>,
> = Point extends keyof Props
  ? Props[Point]
  : never;

export type LowerThanBreakpointsType<
  BPs extends Breakpoints,
  Point extends keyof BPs,
> = MaxWidthType<PropOf<BPs, Point>>;
export type GreaterThanBreakpointsType<
  BPs extends Breakpoints,
  Point extends keyof BPs,
> = MinWidthType<PropOf<BPs, Point>>;
export type BetweenBreakpointsType<
  BPs extends Breakpoints,
  Start extends keyof BPs,
  End extends keyof BPs,
> = `${GreaterThanBreakpointsType<BPs, Start>} and ${LowerThanBreakpointsType<BPs, End>}`;

export type BreakpointFromParam<
  BPs extends Breakpoints,
  Param extends BreakpointParamType<BPs>,
> = Param extends BetweenType<BPs, infer Start, infer End>
  ? BetweenBreakpointsType<BPs, Start, End>
  : Param extends LowerThanType<BPs, infer Point>
    ? LowerThanBreakpointsType<BPs, Point>
    : Param extends GreaterThanType<BPs, infer Point>
      ? GreaterThanBreakpointsType<BPs, Point>
      : never;

export type BreakpointFromOrientation<
  Orientation extends OrientationType,
> = `(orientation: ${Orientation})`;

export type QueryBuilderParam<BPs extends Breakpoints> =
| BreakpointParamType<BPs>
| ModifiersType
| MediumType
| OrientationType;

export type BreakpointOutputFromParam<
  BPs extends Breakpoints,
  Param extends QueryBuilderParam<BPs>,
> = Param extends BreakpointParamType<BPs>
  ? BreakpointFromParam<BPs, Param>
  : Param extends OrientationType
    ? BreakpointFromOrientation<Param>
    : Param;

export type ProcessMediaString<
  MediaString extends string[],
> = MediaString extends [infer Rest extends string]
  ? Rest
  : MediaString extends [infer First extends ModifiersType, ...infer Rest extends string[]]
    ? `${First} ${ProcessMediaString<Rest>}`
    : MediaString extends [infer First extends string, ...infer Rest extends string[]]
      ? `${First} and ${ProcessMediaString<Rest>}`
      : '';

export type MediaStringFromQueries<
  BPs extends Breakpoints,
  Queries extends QueryBuilderParam<BPs>[],
> = ProcessMediaString<
  {
    [key in keyof Queries]: BreakpointOutputFromParam<BPs, Queries[key]>;
  }
>;

export interface QueryBuilder<BPs extends Breakpoints> {
  <Queries extends QueryBuilderParam<BPs>[]>(
    ...queries: Queries
  ): MediaStringFromQueries<BPs, Queries>;
}

export type MediaQueryFromMediaAndQueries<
  BPs extends Breakpoints,
  Media extends MediaType,
  Queries extends QueryBuilderParam<BPs>[],
> = Queries['length'] extends 0
  ? ''
  : `@${Media} ${MediaStringFromQueries<BPs, Queries>}`;

export interface MediaQueryBuilder<BPs extends Breakpoints> {
  <
    Media extends MediaType,
    Queries extends QueryBuilderParam<BPs>[],
  >(
    mediaType: Media,
    ...queries: Queries
  ): MediaQueryFromMediaAndQueries<BPs, Media, Queries>;
}

export interface MediaQueryBuilderFactory {
  <BPs extends Breakpoints>(
    breakpoints: BPs,
  ): {
    mediaQueryFunction: MediaQueryBuilder<BPs>;
    queryFunction: QueryBuilder<BPs>;
    theme: BreakpointsResult<BPs>;
  };
}
