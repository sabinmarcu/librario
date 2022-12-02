import {
  compileTransform,
  mixinOfValues,
  mixinsOfTransform,
  primitivePropsOfTransform,
  primitivesOfTransform,
  primitiveStyleOfTransform,
  propsOfTransform,
  propToMixin,
  styleOfTransform,
  valuesOfTransform,
  valuesPropsOfTransform,
  valuesStyleOfTransform,
} from './transform';
import {
  inputName,
  inputTransform,
} from './transform.fixture';

const primitivesOfTransformTest = primitivesOfTransform(inputTransform);
//     ^? const primitivesOfTransformTest: OmitNeverRaw<{
//            test: string;
//            camelCase: string;
//            nested: never;
//            another: never;
//        }, KeyValue<{
//            test: string;
//            camelCase: string;
//            nested: never;
//            another: never;
//        }>>

type PrimitivesOfTransformTestKeys = keyof typeof primitivesOfTransformTest;
//     ^? type PrimitivesOfTransformTestKeys = "test" | "camelCase"

const valuesOfTransformTest = valuesOfTransform(inputTransform);
//     ^? const valuesOfTransformTest: Simplify<OmitNeverRaw<{
//            test: never;
//            camelCase: never;
//            nested: {
//                stuff: string;
//                is: string;
//                nestedCamelCase: number;
//            };
//            another: {
//                thing: number;
//            };
//        }, KeyValue<{
//            test: never;
//            camelCase: never;
//            nested: {
//                stuff: string;
//                is: string;
//                nestedCamelCase: number;
//            };
//            another: {
//                thing: number;
//            };
//        }>>>

type ValuesOfTransformTestKeys = keyof typeof valuesOfTransformTest;
//     ^? type ValuesOfTransformTestKeys = "nested" | "another"

const primitiveStyleOfTransformTest = primitiveStyleOfTransform(inputName, inputTransform);
//     ^? const primitiveStyleOfTransformTest: Simplify<{
//            "--elevation-test": string;
//            "--elevation-camel-case": string;
//        }>

const primitivePropsOfTransformTest = primitivePropsOfTransform(inputName, inputTransform);
//     ^? const primitivePropsOfTransformTest: TransformTargetPrimitivesPropsOf<"elevation", {
//            test: string;
//            camelCase: string;
//            nested: {
//                stuff: string;
//                is: string;
//                nestedCamelCase: number;
//            };
//            another: {
//                thing: number;
//            };
//        }, OmitNeverRaw<{
//            test: string;
//            camelCase: string;
//            nested: never;
//            another: never;
//        }, KeyValue<...>>>

type PrimitivPropsOfTransformTestKeys = keyof typeof primitivePropsOfTransformTest;
//     ^? type PrimitivPropsOfTransformTestKeys = "test" | "camelCase"

type PrimitivPropsOfTransformTestValues = typeof primitivePropsOfTransformTest[keyof typeof primitivePropsOfTransformTest];
//   ^? type PrimitivPropsOfTransformTestValues = "var(--elevation-test)" | "var(--elevation-camel-case)"

const valuesStyleOfTransformTest = valuesStyleOfTransform(inputName, inputTransform);
//     ^? const valuesStyleOfTransformTest: Simplify<Simplify<{
//            "--elevation-nested-stuff": string;
//            "--elevation-nested-is": string;
//            "--elevation-nested-nested-camel-case": number;
//        }> & Simplify<{
//            "--elevation-another-thing": number;
//        }>>

type ValuesStyleOfTransformTestKeys = keyof typeof valuesStyleOfTransformTest;
//     ^? type ValuesStyleOfTransformTestKeys = "--elevation-nested-stuff" | "--elevation-nested-is" | "--elevation-nested-nested-camel-case" | "--elevation-another-thing"

const valuesPropsOfTransformTest = valuesPropsOfTransform(inputName, inputTransform);
//     ^? const valuesPropsOfTransformTest: {
//            nested: {
//                stuff: "var(--elevation-nested-stuff)";
//                is: "var(--elevation-nested-is)";
//                nestedCamelCase: "var(--elevation-nested-nested-camel-case)";
//            };
//            another: {
//                thing: "var(--elevation-another-thing)";
//            };
//        }

const propToMixinTest1 = propToMixin('background', 'red');
//     ^? const propToMixinTest1: "background: red;"

const propToMixinTest2 = propToMixin('flex-align', 'left');
//     ^? const propToMixinTest2: "flex-align: left;"

const propToMixinTest3 = propToMixin('marginRight', '21');
//     ^? const propToMixinTest3: "margin-right: 21;"

const mixinOfValuesTest = mixinOfValues({ background: 'red', 'flex-align': 'left', marginRight: '21' } as const);
//     ^? const mixinOfValuesTest: "background: red; flex-align: left; margin-right: 21;"

const mixinsOfTransformTest = mixinsOfTransform(inputName, inputTransform);
//     ^? const mixinsOfTransformTest: TransformTargetMixinsOf<"elevation", {
//            test: string;
//            camelCase: string;
//            nested: {
//                stuff: string;
//                is: string;
//                nestedCamelCase: number;
//            };
//            another: {
//                thing: number;
//            };
//        }, {
//            nested: {
//                stuff: "var(--elevation-nested-stuff)";
//                is: "var(--elevation-nested-is)";
//                nestedCamelCase: "var(--elevation-nested-nested-camel-case)";
//            };
//            another: {
//                thing: "var(--elevation-another-thing)";
//            };
//        }>

type MixinsOfTransformTestKeys = keyof typeof mixinsOfTransformTest;
//     ^? type MixinsOfTransformTestKeys = "nested" | "another"

type MixinsOfTransformTestValues = typeof mixinsOfTransformTest[keyof typeof mixinsOfTransformTest];
//     ^? type MixinsOfTransformTestValues = "stuff: var(--elevation-nested-stuff); is: var(--elevation-nested-is); nested-camel-case: var(--elevation-nested-nested-camel-case);" | "thing: var(--elevation-another-thing);"

const styleOfTransformTest = styleOfTransform(inputName, inputTransform);
//     ^? const styleOfTransformTest: Simplify<Simplify<{
//            "--elevation-test": string;
//            "--elevation-camel-case": string;
//        }> & Simplify<Simplify<{
//            "--elevation-nested-stuff": string;
//            "--elevation-nested-is": string;
//            "--elevation-nested-nested-camel-case": number;
//        }> & Simplify<...>>>

const propsOfTransformTest = propsOfTransform(inputName, inputTransform);
//     ^? const propsOfTransformTest: {
//            test: "var(--elevation-test)";
//            camelCase: "var(--elevation-camel-case)";
//            nested: {
//                stuff: "var(--elevation-nested-stuff)";
//                is: "var(--elevation-nested-is)";
//                nestedCamelCase: "var(--elevation-nested-nested-camel-case)";
//            };
//            another: {
//                ...;
//            };
//        }

const compileTransformTest = compileTransform(inputName, inputTransform);
//     ^? const compileTransformTest: {
//            style: {
//                "--elevation-test": string;
//                "--elevation-camel-case": string;
//                "--elevation-nested-stuff": string;
//                "--elevation-nested-is": string;
//                "--elevation-nested-nested-camel-case": number;
//                "--elevation-another-thing": number;
//            };
//            props: {
//                ...;
//            };
//            mixins: {
//                ...;
//            };
//        }
