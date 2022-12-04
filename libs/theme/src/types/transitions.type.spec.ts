import type {
  TransitionsStyleOf,
  TransitionsPropsOf,
  TransitionParam,
  TransitionFromParam,
  TransitionsFromParams,
  TransitionStringFromParam,
  TransitionsResult,
} from './transitions';

type Test1 = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  duration: {
    shortest: 150,
  },
  defaults: {
    easing: 'easeInOut',
    duration: 'shortest',
  },
};

type Test2 = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  defaults: {
    easing: 'easeInOut',
    duration: 'shortest',
  }
};

type TransitionsStyleOfTest1 = TransitionsStyleOf<Test1>;
//     ^? type TransitionsStyleOfTest1 = {
//            "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//            "--transitions-duration-shortest": "150ms";
//        }

type TransitionsStyleOfTest2 = TransitionsStyleOf<Test2>;
//     ^? type TransitionsStyleOfTest2 = {
//            "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//            "--transitions-easing-ease-in": "cubic-bezier(0.4, 0, 1, 1)";
//            "--transitions-easing-ease-out": "cubic-bezier(0.0, 0, 0.2, 1)";
//            ... 7 more ...;
//            "--transitions-duration-leaving-screen": "195ms";
//        }

type TransitionsPropsOfTest1 = TransitionsPropsOf<Test1>;
//     ^? type TransitionsPropsOfTest1 = {
//            easing: {
//                easeInOut: "var(--transitions-easing-ease-in-out)";
//            };
//            duration: {
//                shortest: "var(--transitions-duration-shortest)";
//            };
//        }

type TransitionsPropsOfTest2 = TransitionsPropsOf<Test2>;
//     ^? type TransitionsPropsOfTest2 = {
//            easing: {
//                easeInOut: "var(--transitions-easing-ease-in-out)";
//                easeIn: "var(--transitions-easing-ease-in)";
//                easeOut: "var(--transitions-easing-ease-out)";
//                sharp: "var(--transitions-easing-sharp)";
//            };
//            duration: {
//                ...;
//            };
//        }

type TransitionParamTest1 = TransitionParam<Test1>;
//     ^? type TransitionParamTest1 = keyof CSSStyleDeclaration | [property: keyof CSSStyleDeclaration, duration: "shortest"] | [property: keyof CSSStyleDeclaration, easing: "easeInOut"] | [property: ...] | [property: ...] | [property: ...]

const transitionParamTest1Example1 = 'color' satisfies TransitionParamTest1;

type TransitionParamTest2 = TransitionParam<Test2>;
//     ^? type TransitionParamTest2 = keyof CSSStyleDeclaration | [property: keyof CSSStyleDeclaration, duration: "shortest" | "shorter" | "short" | "standard" | "complex" | "enteringScreen" | "leavingScreen"] | [property: ...] | [property: ...] | [property: ...] | [property: ...]

const transitionParamTest2Example1 = 'color' satisfies TransitionParamTest2;
const transitionParamTest2Example2 = ['color', 'shortest'] satisfies TransitionParamTest2;
const transitionParamTest2Example3 = ['color', 'shortest'] satisfies TransitionParamTest2;
const transitionParamTest2Example4 = ['color', 'shortest', 10] satisfies TransitionParamTest2;
const transitionParamTest2Example5 = ['color', 'shortest', 'easeInOut'] satisfies TransitionParamTest2;
const transitionParamTest2Example6 = ['color', 'shortest', 500, 'easeInOut'] satisfies TransitionParamTest2;

type TransitionFromParamTest2Example1 = TransitionFromParam<Test2, 'color'>;
//     ^? type TransitionFromParamTest2Example1 = ["color", "shortest", 0, "easeInOut"]

type TransitionFromParamTest2Example2 = TransitionFromParam<Test2, ['color', 'sharp']>;
//     ^? type TransitionFromParamTest2Example2 = ["color", "shortest", 0, "sharp"]

type TransitionFromParamTest2Example3 = TransitionFromParam<Test2, ['color', 'short']>;
//     ^? type TransitionFromParamTest2Example3 = ["color", "short", 0, "easeInOut"]

type TransitionFromParamTest2Example4 = TransitionFromParam<Test2, ['color', 'short', 'sharp']>;
//     ^? type TransitionFromParamTest2Example4 = ["color", "short", 0, "sharp"]

type TransitionFromParamTest2Example5 = TransitionFromParam<Test2, ['color', 'short', 500]>;
//     ^? type TransitionFromParamTest2Example5 = ["color", "short", 500, "easeInOut"]

type TransitionFromParamTest2Example6 = TransitionFromParam<Test2, ['color', 'short', 500, 'sharp']>;
//     ^? type TransitionFromParamTest2Example6 = ["color", "short", 500, "sharp"]

type TransitionStringFromParamTest1 = TransitionStringFromParam<Test2, ['color', 'short', 500, 'sharp']>;
//     ^? type TransitionStringFromParamTest1 = "color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp)"

type TransitionsFromParamsTest1 = TransitionsFromParams<Test2, [['color', 'shortest', 500, 'easeInOut']]>;
//     ^? type TransitionsFromParamsTest1 = "color var(--transitions-duration-shortest) 500ms var(--transitions-easing-ease-in-out)"

type TransitionsFromParamsTest2 = TransitionsFromParams<Test2, [['color', 'short', 500, 'sharp'], 'transform']>;
//     ^? type TransitionsFromParamsTest2 = "color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp), transform var(--transitions-duration-shortest) 0ms var(--transitions-easing-ease-in-out)"

type TransitionsResultTest1 = TransitionsResult<Test1>;
//     ^? type TransitionsResultTest1 = {
//            style: {
//                "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//                "--transitions-duration-shortest": "150ms";
//            };
//            props: {
//                easing: {
//                    easeInOut: "var(--transitions-easing-ease-in-out)";
//                };
//                duration: {
//                    shortest: "var(--transitions-duration-shortest)";
//                };
//            };
//            generator: TransitionGenerator<...>;
//        }

type TransitionsResultTest2 = TransitionsResult<Test2>;
//     ^? type TransitionsResultTest2 = {
//            style: {
//                "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//                "--transitions-easing-ease-in": "cubic-bezier(0.4, 0, 1, 1)";
//                "--transitions-easing-ease-out": "cubic-bezier(0.0, 0, 0.2, 1)";
//                ... 7 more ...;
//                "--transitions-duration-leaving-screen": "195ms";
//            };
//            props: {
//                ...;
//            };
//            generator: TransitionGenerator<...>;
//        }
