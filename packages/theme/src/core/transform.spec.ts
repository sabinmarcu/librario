import {
  compileTransform,
  compileTransformSet,
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
  inputMixins,
  inputName,
  inputPrimitives,
  inputPrimitivesProps,
  inputPrimitivesStyle,
  inputTransform,
  inputValues,
  inputValuesProps,
  inputValuesStyle,
  testSet,
  testSetResult,
  valuesToMixinTest,
} from './transform.fixture';

describe('transform', () => {
  describe('primitivesOfTransform', () => {
    it('should be a function', () => {
      expect(primitivesOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(primitivesOfTransform).toHaveLength(0);
    });
    it.each([
      {
        input: inputTransform,
        output: inputPrimitives,
      },
    ])('should work as intended', ({
      input,
      output,
    }) => {
      expect(primitivesOfTransform(input)).toEqual(output);
    });
  });
  describe('valuesOfTransform', () => {
    it('should be a function', () => {
      expect(valuesOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(valuesOfTransform).toHaveLength(0);
    });
    it.each([
      {
        input: inputTransform,
        output: inputValues,
      },
    ])('should work as intended', ({
      input,
      output,
    }) => {
      expect(valuesOfTransform(input)).toEqual(output);
    });
  });
  describe('primitiveStyleOfTransform', () => {
    it('should be a function', () => {
      expect(primitiveStyleOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(primitiveStyleOfTransform).toHaveLength(0);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: inputPrimitivesStyle,
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(primitiveStyleOfTransform(name, input)).toEqual(output);
    });
  });
  describe('primitivePropsOfTransform', () => {
    it('should be a function', () => {
      expect(primitivePropsOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(primitivePropsOfTransform).toHaveLength(0);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: inputPrimitivesProps,
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(primitivePropsOfTransform(name, input)).toEqual(output);
    });
  });
  describe('valuesStyleOfTransform', () => {
    it('should be a function', () => {
      expect(valuesStyleOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(valuesStyleOfTransform).toHaveLength(0);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: inputValuesStyle,
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(valuesStyleOfTransform(name, input)).toEqual(output);
    });
  });
  describe('valuesPropsOfTransform', () => {
    it('should be a function', () => {
      expect(valuesPropsOfTransform).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(valuesPropsOfTransform).toHaveLength(0);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: inputValuesProps,
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(valuesPropsOfTransform(name, input)).toEqual(output);
    });
  });
  describe('propToMixin', () => {
    it('should be a function', () => {
      expect(propToMixin).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(propToMixin).toHaveLength(2);
    });
    it.each([
      {
        name: 'background',
        value: 'red',
        output: 'background: red;',
      },
      {
        name: 'flex-align',
        value: 'left',
        output: 'flex-align: left;',
      },
      {
        name: 'marginRight',
        value: '21',
        output: 'margin-right: 21;',
      },
    ])('propToMixin($name, $value) = $output', ({
      name,
      value,
      output,
    }) => {
      expect(propToMixin(name, value)).toEqual(output);
    });
  });
  describe('mixinOfValues', () => {
    it('should be a function', () => {
      expect(mixinOfValues).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(mixinOfValues).toHaveLength(1);
    });
    it.each([
      {
        input: valuesToMixinTest,
        output: 'background: red; flex-align: left; margin-right: 21;',
      },
    ])('should work as intended', ({
      input,
      output,
    }) => {
      expect(mixinOfValues(input)).toEqual(output);
    });
  });
  describe('mixinsOfTransform', () => {
    it('should be a function', () => {
      expect(mixinsOfTransform).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(mixinsOfTransform).toHaveLength(2);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: inputMixins,
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(mixinsOfTransform(name, input)).toEqual(output);
    });
  });
  describe('styleOfTransform', () => {
    it('should be a function', () => {
      expect(styleOfTransform).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(styleOfTransform).toHaveLength(2);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: {
          ...inputPrimitivesStyle,
          ...inputValuesStyle,
        },
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(styleOfTransform(name, input)).toEqual(output);
    });
  });
  describe('propsOfTransform', () => {
    it('should be a function', () => {
      expect(propsOfTransform).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(propsOfTransform).toHaveLength(2);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: {
          ...inputPrimitivesProps,
          ...inputValuesProps,
        },
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(propsOfTransform(name, input)).toEqual(output);
    });
  });
  describe('compileTransform', () => {
    it('should be a function', () => {
      expect(compileTransform).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(compileTransform).toHaveLength(2);
    });
    it.each([
      {
        name: inputName,
        input: inputTransform,
        output: {
          props: {
            ...inputPrimitivesProps,
            ...inputValuesProps,
          },
          style: {
            ...inputPrimitivesStyle,
            ...inputValuesStyle,
          },
          mixins: inputMixins,
        },
      },
    ])('should work as intended', ({
      name,
      input,
      output,
    }) => {
      expect(compileTransform(name, input)).toEqual(output);
    });
  });
  describe('compileTransformSet', () => {
    it('should be a function', () => {
      expect(compileTransformSet).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(compileTransformSet).toHaveLength(1);
    });
    it.each([
      {
        input: testSet,
        output: testSetResult,
      },
    ])('should work as intended', ({
      input,
      output,
    }) => {
      expect(compileTransformSet(input)).toEqual(output);
    });
  });
});
