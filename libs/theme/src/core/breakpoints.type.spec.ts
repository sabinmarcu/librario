import { BreakpointsPropsOf } from '../types/breakpoints';
import {
  cssVariableOf,
  cssVariableStatement,
} from '../utils/css';
import {
  breakpointsStyleOf,
  cssBreakpointVariableOf,
  breakpointsPropsOf,
  pixelsOf,
  breakpointsOf,
  minWidthQuery,
  maxWidthQuery,
  lowerThanQuery,
  greaterThanQuery,
  betweenQuery,
  orientationQuery,
  queryBuilderFrom,
  mediaQueryBuilderFrom,
} from './breakpoints';
import { breakpointsTest } from './breakpoints.fixture';

const cssBreakpointVariableOfTest1 = cssBreakpointVariableOf('test');
//     ^? const cssBreakpointVariableOfTest1: "--breakpoint-test"

const cssBreakpointVariableOfTest2 = cssBreakpointVariableOf('testThing');
//     ^? const cssBreakpointVariableOfTest2: "--breakpoint-test-thing"

const pixelsOfTest1 = pixelsOf(1);
//     ^? const pixelsOfTest1: "1px"

const pixelsOfTest2 = pixelsOf(42);
//     ^? const pixelsOfTest2: "42px"

const breakpointsStyleOfTest = breakpointsStyleOf(breakpointsTest);
//     ^? const breakpointsStyleOfTest: BreakpointsStyleOf<{
//            readonly test: 1;
//            readonly testThing: 42;
//        }>

type BreakpointsStyleOfTestKeys = keyof typeof breakpointsStyleOfTest;
//     ^? type BreakpointsStyleOfTestKeys = "--breakpoint-test" | "--breakpoint-test-thing"

type BreakpointsStyleOfTestValues = typeof breakpointsStyleOfTest[BreakpointsStyleOfTestKeys];
//     ^? type BreakpointsStyleOfTestValues = "1px" | "42px"

const breakpointsPropsOfTest = breakpointsPropsOf(breakpointsTest);
//     ^? const breakpointsPropsOfTest: BreakpointsPropsOf<{
//            readonly test: 1;
//            readonly testThing: 42;
//        }>

type BreakpointsPropsOfTestKeys = keyof typeof breakpointsPropsOfTest;
//     ^? type BreakpointsPropsOfTestKeys = "test" | "testThing"

type BreakpointsPropsOfTestValues = typeof breakpointsPropsOfTest[BreakpointsPropsOfTestKeys];
//     ^? type BreakpointsPropsOfTestValues = "var(--breakpoint-test)" | "var(--breakpoint-test-thing)"

const breakpointsOfTest = breakpointsOf(breakpointsTest);
//     ^? const breakpointsOfTest: BreakpointsResult<{
//            readonly test: 1;
//            readonly testThing: 42;
//        }>

const minWidthQueryTest = minWidthQuery(cssVariableStatement(cssVariableOf('thing')));
//     ^? const minWidthQueryTest: "(min-width: var(--thing))"

const maxWidthQueryTest = maxWidthQuery(cssVariableStatement(cssVariableOf('thing')));
//     ^? const maxWidthQueryTest: "(max-width: var(--thing))"

const lowerThanQueryTest = lowerThanQuery(breakpointsTest, 'test');
//     ^? const lowerThanQueryTest: "(max-width: var(--breakpoint-test))"

const greaterThanQueryTest = greaterThanQuery(breakpointsTest, 'testThing');
//    ^? const greaterThanQueryTest: "(min-width: var(--breakpoint-test-thing))"

const betweenQueryTest = betweenQuery(breakpointsTest, 'test', 'testThing');
//    ^? const betweenQueryTest: "(min-width: var(--breakpoint-test)) and (max-width: var(--breakpoint-test-thing))"

const orientationQueryTest1 = orientationQuery('portrait');
//    ^? const orientationQueryTest1: "(orientation: portrait)"

const orientationQueryTest2 = orientationQuery('landscape');
//    ^? const orientationQueryTest2: "(orientation: landscape)"

const queryBuilder = queryBuilderFrom(breakpointsTest);

const queryBuilderTest1 = queryBuilder();
//    ^? const queryBuilderTest1: ""

const queryBuilderTest2 = queryBuilder({ lowerThan: 'test' });
//    ^? const queryBuilderTest2: "(max-width: var(--breakpoint-test))"

const queryBuilderTest3 = queryBuilder({ lowerThan: 'test' }, { greaterThan: 'testThing' });
//    ^? const queryBuilderTest3: "(max-width: var(--breakpoint-test)) and (min-width: var(--breakpoint-test-thing))"

const queryBuilderTest4 = queryBuilder('not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' });
//    ^? const queryBuilderTest4: "not screen and (max-width: var(--breakpoint-test)) and not (min-width: var(--breakpoint-test-thing))"

const queryBuilderTest5 = queryBuilder('not', 'screen', { between: ['test', 'testThing'] });
//    ^? const queryBuilderTest5: "not screen and (min-width: var(--breakpoint-test)) and (max-width: var(--breakpoint-test-thing))"

const mediaQueryBuilder = mediaQueryBuilderFrom(breakpointsTest);

const mediaQueryBuilderTest1 = mediaQueryBuilder('media');
//    ^? const mediaQueryBuilderTest1: ""

const mediaQueryBuilderTest2 = mediaQueryBuilder('media', { lowerThan: 'test' });
//    ^? const mediaQueryBuilderTest2: "@media (max-width: var(--breakpoint-test))"

const mediaQueryBuilderTest3 = mediaQueryBuilder('media', { lowerThan: 'test' }, { greaterThan: 'testThing' });
//    ^? const mediaQueryBuilderTest3: "@media (max-width: var(--breakpoint-test)) and (min-width: var(--breakpoint-test-thing))"

const mediaQueryBuilderTest4 = mediaQueryBuilder('media', 'not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' });
//    ^? const mediaQueryBuilderTest4: "@media not screen and (max-width: var(--breakpoint-test)) and not (min-width: var(--breakpoint-test-thing))"

const mediaQueryBuilderTest5 = mediaQueryBuilder('media', 'not', 'screen', { between: ['test', 'testThing'] });
//    ^? const mediaQueryBuilderTest5: "@media not screen and (min-width: var(--breakpoint-test)) and (max-width: var(--breakpoint-test-thing))"
