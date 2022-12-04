import type { HSLColor } from './colors';
import type {
  PaletteGenerator,
  PaletteSliceOfGenerator,
  PaletteOfGenerator,
  StyleOfGenerator,
  PaletteSet,
  PaletteOf,
  StyleOf,
  InputOf,
} from './palette';

type PaletteGeneratorTest<T extends unknown>
  = T extends PaletteGenerator<string> ? true : false;

type PaletteGeneratorTest1 = PaletteGeneratorTest<{}>;
//     ^? type PaletteGeneratorTest1 = true

type PaletteGeneratorTest2 = PaletteGeneratorTest<{ test: () => void }>;
//     ^? type PaletteGeneratorTest2 = false

type PaletteGeneratorTest3 = PaletteGeneratorTest<{ test: (color: string) => string }>;
//     ^? type PaletteGeneratorTest3 = false

type PaletteGeneratorTest4 = PaletteGeneratorTest<{ test: (color: HSLColor) => HSLColor }>;
//     ^? type PaletteGeneratorTest4 = true

type PaletteGeneratorExample1 = { test: (color: HSLColor) => HSLColor };
type PaletteGeneratorExample1Test = PaletteGeneratorTest<PaletteGeneratorExample1>;
//     ^? type PaletteGeneratorExample1Test = true

type PaletteGeneratorExample2 = {
  somethingAwesome: (color: HSLColor) => HSLColor,
  awesomeStuff: (color: HSLColor) => HSLColor,
};
type PaletteGeneratorExample2Test = PaletteGeneratorTest<PaletteGeneratorExample1>;
//     ^? type PaletteGeneratorExample2Test = true

type StyleOfGeneratorTest1 = StyleOfGenerator<'primary', PaletteGeneratorExample1>;
//     ^? type StyleOfGeneratorTest1 = {
//            "--color-primary-test": HSLColor;
//        }

type StyleOfGeneratorTest2 = StyleOfGenerator<'secondary', PaletteGeneratorExample2>;
//     ^? type StyleOfGeneratorTest2 = {
//            "--color-secondary-something-awesome": HSLColor;
//            "--color-secondary-awesome-stuff": HSLColor;
//        }

type PaletteOfGeneratorTest1 = PaletteOfGenerator<'primary', PaletteGeneratorExample1>;
//     ^? type PaletteOfGeneratorTest1 = {
//            test: "var(--color-primary-test)";
//        }

type PaletteOfGeneratorTest2 = PaletteOfGenerator<'secondary', PaletteGeneratorExample2>;
//     ^? type PaletteOfGeneratorTest2 = {
//            somethingAwesome: "var(--color-secondary-something-awesome)";
//            awesomeStuff: "var(--color-secondary-awesome-stuff)";
//        }

type PaletteSliceOfGeneratorTest1 = PaletteSliceOfGenerator<'primary', PaletteGeneratorExample1>;
//     ^? type PaletteSliceOfGeneratorTest1 = {
//            primary: {
//                test: "var(--color-primary-test)";
//            };
//        }

type PaletteSliceOfGeneratorTest2 = PaletteSliceOfGenerator<'secondary', PaletteGeneratorExample2>;
//     ^? type PaletteSliceOfGeneratorTest2 = {
//            secondary: {
//                somethingAwesome: "var(--color-secondary-something-awesome)";
//                awesomeStuff: "var(--color-secondary-awesome-stuff)";
//            };
//        }

type PaletteSetTest<
  Input extends unknown,
> = Input extends PaletteSet ? true : false;

type PaletteSetTest1 = PaletteSetTest<{}>;
//     ^? type PaletteSetTest1 = true

type PaletteSetTest2 = PaletteSetTest<{ test: () => void }>;
//     ^? type PaletteSetTest2 = false

type PaletteSetTest3 = PaletteSetTest<{ test: PaletteGeneratorExample1 }>;
//     ^? type PaletteSetTest3 = true

type PaletteSetExample = { example1: PaletteGeneratorExample1, example2: PaletteGeneratorExample2 };
type PaletteSetTest4 = PaletteSetTest<PaletteSetExample>;
//     ^? type PaletteSetTest4 = true

type StyleOfTest1 = StyleOf<PaletteSetExample>;
//     ^? type StyleOfTest1 = {
//            "--color-example1-test": HSLColor;
//        } & {
//            "--color-example2-something-awesome": HSLColor;
//            "--color-example2-awesome-stuff": HSLColor;
//        }

type KeysOfStyleOfTest1 = keyof StyleOfTest1;
//     ^? type KeysOfStyleOfTest1 = "--color-example1-test" | "--color-example2-something-awesome" | "--color-example2-awesome-stuff"

type PaletteOfTest1 = PaletteOf<PaletteSetExample>;
//     ^? type PaletteOfTest1 = {
//            example1: {
//                test: "var(--color-example1-test)";
//            };
//            example2: {
//                somethingAwesome: "var(--color-example2-something-awesome)";
//                awesomeStuff: "var(--color-example2-awesome-stuff)";
//            };
//        }

type InputOfTest1 = InputOf<PaletteSetExample>;
//     ^? type InputOfTest1 = {
//            example1: HSLColor;
//            example2: HSLColor;
//        }
