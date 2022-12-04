import type { TransitionsDefinition } from '../types/transitions';

export const transitionsTest1 = {
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
} as const satisfies TransitionsDefinition;

export const transitionsTest2 = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    short: 250,
  },
  defaults: {
    easing: 'easeInOut',
    duration: 'shortest',
  },
} as const satisfies TransitionsDefinition;

export const styleTransitionTest1 = {
  '--transitions-easing-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  '--transitions-duration-shortest': '150ms',
};

export const styleTransitionTest2 = {
  '--transitions-easing-ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  '--transitions-easing-sharp': 'cubic-bezier(0.4, 0, 0.6, 1)',
  '--transitions-duration-shortest': '150ms',
  '--transitions-duration-short': '250ms',
};

export const propsTransitionTest1 = {
  easing: {
    easeInOut: 'var(--transitions-easing-ease-in-out)',
  },
  duration: {
    shortest: 'var(--transitions-duration-shortest)',
  },
};

export const propsTransitionTest2 = {
  easing: {
    easeInOut: 'var(--transitions-easing-ease-in-out)',
    sharp: 'var(--transitions-easing-sharp)',
  },
  duration: {
    shortest: 'var(--transitions-duration-shortest)',
    short: 'var(--transitions-duration-short)',
  },
};

export const normalizeParamTest1 = 'color';
export const normalizeParamTest1Result = ['color', 'shortest', 0, 'easeInOut'];

export const normalizeParamTest2 = ['color', 'sharp'];
export const normalizeParamTest2Result = ['color', 'shortest', 0, 'sharp'];

export const normalizeParamTest3 = ['color', 'short'];
export const normalizeParamTest3Result = ['color', 'short', 0, 'easeInOut'];

export const normalizeParamTest4 = ['color', 'short', 'sharp'];
export const normalizeParamTest4Result = ['color', 'short', 0, 'sharp'];

export const normalizeParamTest5 = ['color', 'short', 500];
export const normalizeParamTest5Result = ['color', 'short', 500, 'easeInOut'];

export const normalizeParamTest6 = ['color', 'short', 500, 'sharp'];
export const normalizeParamTest6Result = ['color', 'short', 500, 'sharp'];

export const transitionFromParamTest = ['color', 'short', 500, 'sharp'] as const;
export const transitionFromParamTestResult = 'color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp)';

export const transitionsFromParamsTest1 = [['color', 'shortest', 500, 'easeInOut'] as const];
export const transitionsFromParamsTest1Result = 'color var(--transitions-duration-shortest) 500ms var(--transitions-easing-ease-in-out)';

export const transitionsFromParamsTest2 = [['color', 'short', 500, 'sharp'] as const, 'transform'];
export const transitionsFromParamsTest2Result = 'color var(--transitions-duration-short) 500ms var(--transitions-easing-sharp), transform var(--transitions-duration-shortest) 0ms var(--transitions-easing-ease-in-out)';
