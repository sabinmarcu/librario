import type {
  Breakpoints,
  BreakpointsPropsOf,
  BreakpointsResult,
  BreakpointsStyleOf,
  MediaType,
  OrientationType,
  QueryBuilder,
  QueryBuilderParam,
} from '../types/breakpoints';

export const breakpointsTest = {
  test: 1,
  testThing: 42,
} as const satisfies Breakpoints;

export type TestBreakpoints = typeof breakpointsTest;
export type TestBreakpoint = keyof TestBreakpoints;

export const breakpointsStyle = {
  '--breakpoint-test': '1px',
  '--breakpoint-test-thing': '42px',
} as const satisfies BreakpointsStyleOf<typeof breakpointsTest>;

export const breakpointsProps = {
  test: 'var(--breakpoint-test)',
  testThing: 'var(--breakpoint-test-thing)',
} as const satisfies BreakpointsPropsOf<typeof breakpointsTest>;

export const breakpointsResult = {
  style: breakpointsStyle,
  props: breakpointsProps,
} as const satisfies BreakpointsResult<typeof breakpointsTest>;

export type RawQueryTestType = {
  breakpoints: TestBreakpoints,
  input: TestBreakpoint | [TestBreakpoint, TestBreakpoint],
  output: string,
};

export type OrientationTestType = {
  input: OrientationType,
  output: string
};

export type TestQueryBuilder = QueryBuilder<TestBreakpoints>;
export type TestQueryParams = QueryBuilderParam<TestBreakpoints>[];
export type QueryTestType = {
  input: TestQueryParams,
  output: string,
};
export type MediaQueryTestType = {
  media: MediaType,
  input: TestQueryParams,
  output: string,
};
