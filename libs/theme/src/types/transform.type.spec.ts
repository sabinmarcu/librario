import type {
  CSSTransformTargetValueVariableOf,
  PropToMixin,
  TransformTarget,
  TransformTargetPrimitivesOf,
  TransformTargetPrimitivesPropsOf,
  TransformTargetPrimitivesStyleOf,
  TransformTargetPrimitiveValueOrNever,
  TransformTargetPropsOf,
  TransformTargetStyleOf,
  TransformTargetValueMixinsOf,
  TransformTargetValueOrNever,
  TransformTargetMixinsOf,
  TransformTargetValuesOf,
  TransformTargetValuesPropsOf,
  TransformTargetValuesStyleOf,
  TransformTargetResults,
  TransformSetResults,
} from './transform';

const transformTargetTest1 = {} satisfies TransformTarget;

const transformTargetTest2 = {
  stuff: 'awesome',
  test: 21,
} satisfies TransformTarget;

const transformTargetTest3 = {
  stuff: 'awesome',
  camelCase: 21,
  nested: {
    stuff: 'awesome',
    is: 'nested',
    nestedCamelCase: 42,
  },
  another: {
    thing: 21,
  },
} satisfies TransformTarget;

type CSSTransformTargetValueVariableOfTest1 = CSSTransformTargetValueVariableOf<'elevation', 1>;
//     ^? type CSSTransformTargetValueVariableOfTest1 = "--elevation-1"

type CSSTransformTargetValueVariableOfTest2 = CSSTransformTargetValueVariableOf<'elevation', 'stuff'>;
//     ^? type CSSTransformTargetValueVariableOfTest2 = "--elevation-stuff"

type TransformTargetPrimitiveValueOrNeverTest1 = TransformTargetPrimitiveValueOrNever<'stuff'>;
//     ^? type TransformTargetPrimitiveValueOrNeverTest1 = "stuff"

type TransformTargetPrimitiveValueOrNeverTest2 = TransformTargetPrimitiveValueOrNever<42>;
//     ^? type TransformTargetPrimitiveValueOrNeverTest2 = 42

type TransformTargetPrimitiveValueOrNeverTest3 = TransformTargetPrimitiveValueOrNever<{}>;
//     ^? type TransformTargetPrimitiveValueOrNeverTest3 = never

type TransformTargetPrimitivesOfTest1 = TransformTargetPrimitivesOf<typeof transformTargetTest1>;
//     ^? type TransformTargetPrimitivesOfTest1 = {}

type TransformTargetPrimitivesOfTest2 = TransformTargetPrimitivesOf<typeof transformTargetTest2>;
//     ^? type TransformTargetPrimitivesOfTest2 = {
//            stuff: string;
//            test: number;
//        }

type TransformTargetPrimitivesOfTest3 = TransformTargetPrimitivesOf<typeof transformTargetTest3>;
//     ^? type TransformTargetPrimitivesOfTest3 = {
//            stuff: string;
//            camelCase: number;
//        }

type TransformTargetValueOrNeverTest1 = TransformTargetValueOrNever<'stuff'>;
//     ^? type TransformTargetValueOrNeverTest1 = never

type TransformTargetValueOrNeverTest2 = TransformTargetValueOrNever<42>;
//     ^? type TransformTargetValueOrNeverTest2 = never

type TransformTargetValueOrNeverTest3 = TransformTargetValueOrNever<{ stuff: 'awesome' }>;
//     ^? type TransformTargetValueOrNeverTest3 = {
//            stuff: 'awesome';
//        }

type TransformTargetValuesOfTest1 = TransformTargetValuesOf<typeof transformTargetTest1>;
//     ^? type TransformTargetValuesOfTest1 = {}

type TransformTargetValuesOfTest2 = TransformTargetValuesOf<typeof transformTargetTest2>;
//     ^? type TransformTargetValuesOfTest2 = {}

type TransformTargetValuesOfTest3 = TransformTargetValuesOf<typeof transformTargetTest3>;
//     ^? type TransformTargetValuesOfTest3 = {
//            nested: {
//                stuff: string;
//                is: string;
//                nestedCamelCase: number;
//            };
//            another: {
//                thing: number;
//            };
//        }

type TransformTargetPrimitivesStyleOfTest1 = TransformTargetPrimitivesStyleOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetPrimitivesStyleOfTest1 = {}

type TransformTargetPrimitivesStyleOfTest2 = TransformTargetPrimitivesStyleOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetPrimitivesStyleOfTest2 = {
//            "--elevation-stuff": string;
//            "--elevation-test": number;
//        }

type TransformTargetPrimitivesStyleOfTest3 = TransformTargetPrimitivesStyleOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetPrimitivesStyleOfTest3 = {
//            "--elevation-stuff": string;
//            "--elevation-camel-case": number;
//        }

type TransformTargetPrimitivesPropsOfTest1 = TransformTargetPrimitivesPropsOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetPrimitivesPropsOfTest1 = {}

type TransformTargetPrimitivesPropsOfTest2 = TransformTargetPrimitivesPropsOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetPrimitivesPropsOfTest2 = {
//            stuff: "var(--elevation-stuff)";
//            test: "var(--elevation-test)";
//        }

type TransformTargetPrimitivesPropsOfTest3 = TransformTargetPrimitivesPropsOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetPrimitivesPropsOfTest3 = {
//            stuff: "var(--elevation-stuff)";
//            camelCase: "var(--elevation-camel-case)";
//        }

type TransformTargetValuesStyleOfTest1 = TransformTargetValuesStyleOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetValuesStyleOfTest1 = {}

type TransformTargetValuesStyleOfTest2 = TransformTargetValuesStyleOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetValuesStyleOfTest2 = {}

type TransformTargetValuesStyleOfTest3 = TransformTargetValuesStyleOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetValuesStyleOfTest3 = {
//            "--elevation-nested-stuff": string;
//            "--elevation-nested-is": string;
//            "--elevation-nested-nested-camel-case": number;
//            "--elevation-another-thing": number;
//        }

type TransformTargetValuesPropsOfTest1 = TransformTargetValuesPropsOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetValuesPropsOfTest1 = {}

type TransformTargetValuesPropsOfTest2 = TransformTargetValuesPropsOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetValuesPropsOfTest2 = {}

type TransformTargetValuesPropsOfTest3 = TransformTargetValuesPropsOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetValuesPropsOfTest3 = {
//            nested: {
//                stuff: "var(--elevation-nested-stuff)";
//                is: "var(--elevation-nested-is)";
//                nestedCamelCase: "var(--elevation-nested-nested-camel-case)";
//            };
//            another: {
//                thing: "var(--elevation-another-thing)";
//            };
//        }

type PropToMixinTest1 = PropToMixin<'background', 'red'>;
//     ^? type PropToMixinTest1 = "background: red;"

type PropToMixinTest2 = PropToMixin<'flex-align', 'left'>;
//     ^? type PropToMixinTest2 = "flex-align: left;"

type PropToMixinTest3 = PropToMixin<'marginRight', '21'>;
//     ^? type PropToMixinTest3 = "margin-right: 21;"

type TransformTargetValueMixinsOfTest1 = TransformTargetValueMixinsOf<{ 'background': 'red'; 'flex-align': 'left'; 'marginRight': '21' }>;
//     ^? type TransformTargetValueMixinsOfTest1 = "background: red; flex-align: left; margin-right: 21;"

type TransformTargetMixinsOfTest1 = TransformTargetMixinsOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetMixinsOfTest1 = {
//            nested: "stuff: var(--elevation-nested-stuff); is: var(--elevation-nested-is); nested-camel-case: var(--elevation-nested-nested-camel-case);";
//            another: "thing: var(--elevation-another-thing);";
//        }

type TransformTargetStyleOfTest1 = TransformTargetStyleOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetStyleOfTest1 = {}

type TransformTargetStyleOfTest2 = TransformTargetStyleOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetStyleOfTest2 = {
//            "--elevation-stuff": string;
//            "--elevation-test": number;
//        }

type TransformTargetStyleOfTest3 = TransformTargetStyleOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetStyleOfTest3 = {
//            "--elevation-stuff": string;
//            "--elevation-camel-case": number;
//            "--elevation-nested-stuff": string;
//            "--elevation-nested-is": string;
//            "--elevation-nested-nested-camel-case": number;
//            "--elevation-another-thing": number;
//        }

type TransformTargetPropsOfTest1 = TransformTargetPropsOf<'elevation', typeof transformTargetTest1>;
//     ^? type TransformTargetPropsOfTest1 = {}

type TransformTargetPropsOfTest2 = TransformTargetPropsOf<'elevation', typeof transformTargetTest2>;
//     ^? type TransformTargetPropsOfTest2 = {
//            stuff: "var(--elevation-stuff)";
//            test: "var(--elevation-test)";
//        }

type TransformTargetPropsOfTest3 = TransformTargetPropsOf<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetPropsOfTest3 = {
//            stuff: "var(--elevation-stuff)";
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

type TransformTargetResultsTest1 = TransformTargetResults<'elevation', typeof transformTargetTest3>;
//     ^? type TransformTargetResultsTest1 = {
//            style: {
//                "--elevation-stuff": string;
//                "--elevation-camel-case": number;
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

type TestTransform1 = {
  'a': 1,
  'b': 'awesome',
};
type TestTransform2 = {
  'x': 1,
  'nested': {
    'y': 2,
    'z': 3,
  }
};
type TestSet = {
  'test1': TestTransform1,
  'test2': TestTransform2,
};

type TestTransformResults = TransformSetResults<TestSet>;
//     ^? type TestTransformResults = {
//            style: {
//                "--test1-a": 1;
//                "--test1-b": "awesome";
//                "--test2-x": 1;
//                "--test2-nested-y": 2;
//                "--test2-nested-z": 3;
//            };
//            props: {
//                test1: {
//                    a: "var(--test1-a)";
//                    b: "var(--test1-b)";
//                };
//                test2: {
//                    x: "var(--test2-x)";
//                    nested: {
//                        ...;
//                    };
//                };
//            };
//            mixins: {
//                ...;
//            };
//        }

type T = TestTransformResults['mixins'];
//   ^? type T = {
//          test1: {};
//          test2: {
//              nested: "y: var(--test2-nested-y); z: var(--test2-nested-z);";
//          };
//      }
