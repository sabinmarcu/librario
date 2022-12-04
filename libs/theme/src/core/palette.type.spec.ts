import {
  compileGeneratorPalette,
  compileGeneratorPaletteSlice,
  compileGeneratorStyle,
  compilePaletteSet,
  cssColorVariableOf,
} from './palette';
import {
  paletteInput,
  paletteTest,
} from './palette.fixture';

const cssColorVariableOfTest1 = cssColorVariableOf('awesome');
//     ^? const cssColorVariableOfTest1: "--color-awesome"

const cssColorVariableOfTest2 = cssColorVariableOf('someAwesomeStuff');
//     ^? const cssColorVariableOfTest2: "--color-some-awesome-stuff"

const cssColorVariableOfTest3 = cssColorVariableOf('someAwesome Stuff');
//     ^? const cssColorVariableOfTest3: "--color-some-awesome--stuff"

const compileGeneratorStyleTest1 = compileGeneratorStyle('primary', paletteTest.primary, paletteInput.primary);
//     ^? const compileGeneratorStyleTest1: {
//            "--color-primary-main": HSLColor;
//            "--color-primary-lighter": HSLColor;
//        }

const compileGeneratorStyleOfTest2 = compileGeneratorStyle('secondary', paletteTest.secondary, paletteInput.secondary);
//     ^? const compileGeneratorStyleOfTest2: {
//            "--color-secondary-main": HSLColor;
//            "--color-secondary-darker": HSLColor;
//        }

const compileGeneratorPaletteTest1 = compileGeneratorPalette('primary', paletteTest.primary);
//     ^? const compileGeneratorPaletteTest1: {
//            main: "var(--color-primary-main)";
//            lighter: "var(--color-primary-lighter)";
//        }

const compileGeneratorPaletteOfTest2 = compileGeneratorPalette('secondary', paletteTest.secondary);
//     ^? const compileGeneratorPaletteOfTest2: {
//            main: "var(--color-secondary-main)";
//            darker: "var(--color-secondary-darker)";
//        }

const compileGeneratorPaletteSliceOfTest1 = compileGeneratorPaletteSlice('primary', paletteTest.primary);
//     ^? const compileGeneratorPaletteSliceOfTest1: PaletteSliceOfGenerator<"primary", {
//            readonly main: (color: HSLColor) => HSLColor;
//            readonly lighter: (color: HSLColor) => HSLColor;
//        }>

const compileGeneratorPaletteSliceOfTest2 = compileGeneratorPaletteSlice('secondary', paletteTest.secondary);
//     ^? const compileGeneratorPaletteSliceOfTest2: PaletteSliceOfGenerator<"secondary", {
//            readonly main: (color: HSLColor) => HSLColor;
//            readonly darker: (color: HSLColor) => HSLColor;
//        }>

const compilePaletteSetTest = compilePaletteSet(paletteTest, paletteInput);
//     ^? const compilePaletteSetTest: {
//            style: {
//                "--color-primary-main": HSLColor;
//                "--color-primary-lighter": HSLColor;
//            } & {
//                "--color-secondary-main": HSLColor;
//                "--color-secondary-darker": HSLColor;
//            };
//            palette: {
//                ...;
//            };
//        }

const compilePaletteSetTestStyle = compilePaletteSetTest.style;
//     ^? const compilePaletteSetTestStyle: {
//            "--color-primary-main": HSLColor;
//            "--color-primary-lighter": HSLColor;
//        } & {
//            "--color-secondary-main": HSLColor;
//            "--color-secondary-darker": HSLColor;
//        }

const compilePaletteSetTestPalette = compilePaletteSetTest.palette;
//     ^? const compilePaletteSetTestPalette: {
//            primary: {
//                main: "var(--color-primary-main)";
//                lighter: "var(--color-primary-lighter)";
//            };
//            secondary: {
//                main: "var(--color-secondary-main)";
//                darker: "var(--color-secondary-darker)";
//            };
//        }
