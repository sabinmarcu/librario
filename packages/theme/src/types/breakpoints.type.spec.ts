import type {
  BetweenBreakpointsType,
  BreakpointFromOrientation,
  BreakpointsPropsOf,
  BreakpointsResult,
  BreakpointsStyleOf,
  CSSBreakpointVariableOf,
  GreaterThanBreakpointsType,
  LowerThanBreakpointsType,
  MaxWidthType,
  MediaQueryFromMediaAndQueries,
  MediaStringFromQueries,
  MinWidthType,
  PixelsOf,
  ProcessMediaString,
} from './breakpoints';
import type {
  CSSVariableOf,
  CSSVarStatementOf,
} from './css';

type CSSBreakpointVariableOfTest1 = CSSBreakpointVariableOf<'test'>;
//     ^? type CSSBreakpointVariableOfTest1 = "--breakpoint-test"

type CSSBreakpointVariableOfTest2 = CSSBreakpointVariableOf<'testThing'>;
//     ^? type CSSBreakpointVariableOfTest2 = "--breakpoint-test-thing"

type PixelsOfTest1 = PixelsOf<1>;
//     ^? type PixelsOfTest1 = "1px"

type PixelsOfTest2 = PixelsOf<42>;
//     ^? type PixelsOfTest2 = "42px"

type BreakpointsTest = {
  test: 1,
  testThing: 42,
};

type BreakpointsStyleOfTest = BreakpointsStyleOf<BreakpointsTest>;
//     ^? type BreakpointsStyleOfTest = {
//            "--breakpoint-test": "1px";
//            "--breakpoint-test-thing": "42px";
//        }

type BreakpointsPropsOfTest = BreakpointsPropsOf<BreakpointsTest>;
//     ^? type BreakpointsPropsOfTest = {
//            test: "var(--breakpoint-test)";
//            testThing: "var(--breakpoint-test-thing)";
//        }

type BreakpointsResultTest = BreakpointsResult<BreakpointsTest>;
//     ^? type BreakpointsResultTest = {
//            style: BreakpointsStyleOf<BreakpointsTest>;
//            props: BreakpointsPropsOf<BreakpointsTest>;
//        }

type MinWidthTypeTest = MinWidthType<CSSVarStatementOf<CSSVariableOf<'someVar'>>>;
//     ^? type MinWidthTypeTest = "(min-width: var(--some-var))"

type MaxWidthTypeTest = MaxWidthType<CSSVarStatementOf<CSSVariableOf<'someVar'>>>;
//     ^? type MaxWidthTypeTest = "(max-width: var(--some-var))"

type LowerThanBreakpointsTypeTest = LowerThanBreakpointsType<BreakpointsTest, 'test'>;
//     ^? type LowerThanBreakpointsTypeTest = "(max-width: var(--breakpoint-test))"

type GreaterThanBreakpointsTypeTest = GreaterThanBreakpointsType<BreakpointsTest, 'testThing'>;
//     ^? type GreaterThanBreakpointsTypeTest = "(min-width: var(--breakpoint-test-thing))"

type BetweenBreakpointsTypeTest = BetweenBreakpointsType<BreakpointsTest, 'test', 'testThing'>;
//     ^? type BetweenBreakpointsTypeTest = "(min-width: var(--breakpoint-test)) and (max-width: var(--breakpoint-test-thing))"

type BreakpointFromOrientationTest = BreakpointFromOrientation<'portrait'>;
//     ^? type BreakpointFromOrientationTest = "(orientation: portrait)"

type ProcessMediaStringTest1 = ProcessMediaString<[]>;
//     ^? type ProcessMediaStringTest1 = ""

type ProcessMediaStringTest2 = ProcessMediaString<['test']>;
//     ^? type ProcessMediaStringTest2 = "test"

type ProcessMediaStringTest3 = ProcessMediaString<['test', 'thing']>;
//     ^? type ProcessMediaStringTest3 = "test and thing"

type ProcessMediaStringTest4 = ProcessMediaString<['not', 'test', 'thing']>;
//     ^? type ProcessMediaStringTest4 = "not test and thing"

type ProcessMediaStringTest5 = ProcessMediaString<['not', 'test', 'not', 'thing']>;
//     ^? type ProcessMediaStringTest5 = "not test and not thing"

type ProcessMediaStringTest6 = ProcessMediaString<['test', 'not', 'thing']>;
//     ^? type ProcessMediaStringTest6 = "test and not thing"

type MediaStringFromQueriesTest1 = MediaStringFromQueries<BreakpointsTest, []>;
//     ^? type MediaStringFromQueriesTest1 = ""

type MediaStringFromQueriesTest2 = MediaStringFromQueries<BreakpointsTest, [{ lowerThan: 'test' }]>;
//     ^? type MediaStringFromQueriesTest2 = "(max-width: var(--breakpoint-test))"

type MediaStringFromQueriesTest3 = MediaStringFromQueries<BreakpointsTest, [{ lowerThan: 'test' }, { greaterThan: 'testThing' }]>;
//     ^? type MediaStringFromQueriesTest3 = "(max-width: var(--breakpoint-test)) and (min-width: var(--breakpoint-test-thing))"

type MediaStringFromQueriesTest4 = MediaStringFromQueries<BreakpointsTest, ['not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' }]>;
//     ^? type MediaStringFromQueriesTest4 = "not screen and (max-width: var(--breakpoint-test)) and not (min-width: var(--breakpoint-test-thing))"

type MediaStringFromQueriesTest5 = MediaStringFromQueries<BreakpointsTest, ['not', 'screen', { between: ['test', 'testThing'] }]>;
//     ^? type MediaStringFromQueriesTest5 = "not screen and (min-width: var(--breakpoint-test)) and (max-width: var(--breakpoint-test-thing))"

type MediaQueryFromMediaAndQueriesTest1 = MediaQueryFromMediaAndQueries<BreakpointsTest, 'media', []>;
//     ^? type MediaQueryFromMediaAndQueriesTest1 = ""

type MediaQueryFromMediaAndQueriesTest2 = MediaQueryFromMediaAndQueries<BreakpointsTest, 'media', [{ lowerThan: 'test' }]>;
//     ^? type MediaQueryFromMediaAndQueriesTest2 = "@media (max-width: var(--breakpoint-test))"

type MediaQueryFromMediaAndQueriesTest3 = MediaQueryFromMediaAndQueries<BreakpointsTest, 'media', [{ lowerThan: 'test' }, { greaterThan: 'testThing' }]>;
//     ^? type MediaQueryFromMediaAndQueriesTest3 = "@media (max-width: var(--breakpoint-test)) and (min-width: var(--breakpoint-test-thing))"

type MediaQueryFromMediaAndQueriesTest4 = MediaQueryFromMediaAndQueries<BreakpointsTest, 'media', ['not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' }]>;
//     ^? type MediaQueryFromMediaAndQueriesTest4 = "@media not screen and (max-width: var(--breakpoint-test)) and not (min-width: var(--breakpoint-test-thing))"
