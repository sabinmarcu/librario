import { type HSLColor } from './colors';

const TestHSL1 = 'hsl(50, 0%, 50%)' satisfies HSLColor;
//     ^? const TestHSL1: "hsl(50, 0%, 50%)"

const TestHSL2 = 'hsl(50, 50%, 50%)' satisfies HSLColor;
//     ^? const TestHSL2: "hsl(50, 50%, 50%)"

type TestHSL<T extends string> =
  T extends HSLColor ? true : false;

type TestHSLTest1 = TestHSL<'hsl(50, 0%, 50%)'>;
//     ^? type TestHSLTest1 = true

type TestHSLTest2 = TestHSL<'hsl(50, 50%, 50%)'>;
//     ^? type TestHSLTest2 = true

type TestHSLTest3 = TestHSL<'hsl(50, 50, 50%)'>;
//     ^? type TestHSLTest3 = false
