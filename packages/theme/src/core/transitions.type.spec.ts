import { TransitionsFromParams } from '../types/transitions';
import {
  propsOfTransitions,
  styleOfTransitions,
  normalizeTransitionParam,
  transitionFromParam,
  transitionsFromParams,
} from './transitions';
import {
  transitionsTest1,
  transitionsTest2,
} from './transitions.fixture';

const styleOfTransitionsTest1 = styleOfTransitions(transitionsTest1);
//      ^? const styleOfTransitionsTest1: {
//             "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//             "--transitions-duration-shortest": "150ms";
//         }

const styleOfTransitionsTest2 = styleOfTransitions(transitionsTest2);
//      ^? const styleOfTransitionsTest2: {
//             "--transitions-easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)";
//             "--transitions-easing-sharp": "cubic-bezier(0.4, 0, 0.6, 1)";
//             "--transitions-duration-shortest": "150ms";
//             "--transitions-duration-short": "250ms";
//         }

const propsOfTransitionsTest1 = propsOfTransitions(transitionsTest1);
//      ^? const propsOfTransitionsTest1: {
//             easing: {
//                 easeInOut: "var(--transitions-easing-ease-in-out)";
//             };
//             duration: {
//                 shortest: "var(--transitions-duration-shortest)";
//             };
//         }

const propsOfTransitionsTest2 = propsOfTransitions(transitionsTest2);
//      ^? const propsOfTransitionsTest2: {
//             easing: {
//                 easeInOut: "var(--transitions-easing-ease-in-out)";
//                 sharp: "var(--transitions-easing-sharp)";
//             };
//             duration: {
//                 shortest: "var(--transitions-duration-shortest)";
//                 short: "var(--transitions-duration-short)";
//             };
//         }

const normalizeTransitionParamTest1 = normalizeTransitionParam(transitionsTest2, 'color');
//     ^? const normalizeTransitionParamTest1: ["color", "shortest", 0, "easeInOut"]

const normalizeTransitionParamTest2 = normalizeTransitionParam(transitionsTest2, ['color', 'sharp'] as const);
//     ^? const normalizeTransitionParamTest2: ["color", "shortest", 0, "sharp"]

const normalizeTransitionParamTest3 = normalizeTransitionParam(transitionsTest2, ['color', 'short'] as const);
//     ^? const normalizeTransitionParamTest3: ["color", "short", 0, "easeInOut"]

const normalizeTransitionParamTest4 = normalizeTransitionParam(transitionsTest2, ['color', 'short', 'sharp'] as const);
//     ^? const normalizeTransitionParamTest4: ["color", "short", 0, "sharp"]

const normalizeTransitionParamTest5 = normalizeTransitionParam(transitionsTest2, ['color', 'short', 500] as const);
//     ^? const normalizeTransitionParamTest5: ["color", "short", 500, "easeInOut"]

const normalizeTransitionParamTest6 = normalizeTransitionParam(transitionsTest2, ['color', 'short', 500, 'sharp'] as const);
//     ^? const normalizeTransitionParamTest6: ["color", "short", 500, "sharp"]

const transitionFromParamTest = transitionFromParam(transitionsTest2, ['color', 'short', 500, 'sharp'] as const);
//     ^? const transitionFromParamTest: "color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp)"

const transitionsFromParamsTest1 = transitionsFromParams(transitionsTest2, ['color', 'shortest', 500, 'easeInOut'] as const);
//     ^? const transitionsFromParamsTest1: "color var(--transitions-duration-shortest) 500ms var(--transitions-easing-ease-in-out)"

const transitionsFromParamsTest2 = transitionsFromParams(transitionsTest2, ['color', 'short', 500, 'sharp'] as const, 'transform');
//     ^? const transitionsFromParamsTest2: "color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp), transform var(--transitions-duration-shortest) 0ms var(--transitions-easing-ease-in-out)"
