import type {
  TransformSet,
  TransformTarget,
  TransformTargetPrimitivesOf,
  TransformTargetPrimitivesPropsOf,
  TransformTargetPrimitivesStyleOf,
  TransformTargetValuesOf,
  TransformTargetValuesPropsOf,
  TransformTargetValuesStyleOf,
} from '../types/transform';

export const inputName = 'elevation';
export const inputTransform = {
  test: 'awesome',
  camelCase: 'should also work',
  nested: {
    stuff: 'awesome',
    is: 'nested',
    nestedCamelCase: 42,
  },
  another: {
    thing: 21,
  },
} satisfies TransformTarget;

export const inputPrimitives = {
  test: 'awesome',
  camelCase: 'should also work',
} satisfies TransformTargetPrimitivesOf<typeof inputTransform>;

export const inputValues = {
  nested: {
    stuff: 'awesome',
    is: 'nested',
    nestedCamelCase: 42,
  },
  another: {
    thing: 21,
  },
} satisfies TransformTargetValuesOf<typeof inputTransform>;

export const inputPrimitivesStyle = {
  '--elevation-test': 'awesome',
  '--elevation-camel-case': 'should also work',
} as const satisfies TransformTargetPrimitivesStyleOf<typeof inputName, typeof inputTransform>;

export const inputPrimitivesProps = {
  test: 'var(--elevation-test)',
  camelCase: 'var(--elevation-camel-case)',
} as const satisfies TransformTargetPrimitivesPropsOf<typeof inputName, typeof inputTransform>;

export const inputValuesStyle = {
  '--elevation-nested-stuff': 'awesome',
  '--elevation-nested-is': 'nested',
  '--elevation-nested-nested-camel-case': 42,
  '--elevation-another-thing': 21,
} as const satisfies TransformTargetValuesStyleOf<typeof inputName, typeof inputTransform>;

export const inputValuesProps = {
  nested: {
    stuff: 'var(--elevation-nested-stuff)',
    is: 'var(--elevation-nested-is)',
    nestedCamelCase: 'var(--elevation-nested-nested-camel-case)',
  },
  another: {
    thing: 'var(--elevation-another-thing)',
  },
} as const satisfies TransformTargetValuesPropsOf<typeof inputName, typeof inputTransform>;

export const valuesToMixinTest = {
  background: 'red',
  'flex-align': 'left',
  marginRight: '21',
} as const satisfies Record<string, string>;

export const inputMixins = {
  nested: 'stuff: var(--elevation-nested-stuff); is: var(--elevation-nested-is); nested-camel-case: var(--elevation-nested-nested-camel-case);',
  another: 'thing: var(--elevation-another-thing);',
} as const;

export const testTransform1 = {
  a: 1,
  b: 'awesome',
} as const satisfies TransformTarget;

export const testTransform2 = {
  x: 1,
  nested: {
    y: 2,
    z: 3,
  },
} as const satisfies TransformTarget;

export const testSet = {
  test1: testTransform1,
  test2: testTransform2,
} as const satisfies TransformSet;

export const testSetResult = {
  style: {
    '--test1-a': 1,
    '--test1-b': 'awesome',
    '--test2-x': 1,
    '--test2-nested-y': 2,
    '--test2-nested-z': 3,
  },
  props: {
    test1: {
      a: 'var(--test1-a)',
      b: 'var(--test1-b)',
    },
    test2: {
      x: 'var(--test2-x)',
      nested: {
        y: 'var(--test2-nested-y)',
        z: 'var(--test2-nested-z)',
      },
    },
  },
  mixins: {
    test1: {},
    test2: {
      nested: 'y: var(--test2-nested-y); z: var(--test2-nested-z);',
    },
  },
};
