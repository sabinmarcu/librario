import {
  normalizeTransitionParam,
  propsOfTransitions,
  styleOfTransitions,
  transitionFromParam,
  transitionsFromParams,
  transitionsGeneratorOf,
} from './transitions';
import {
  propsTransitionTest1,
  propsTransitionTest2,
  styleTransitionTest1,
  styleTransitionTest2,
  transitionsTest1,
  transitionsTest2,
  normalizeParamTest1,
  normalizeParamTest1Result,
  normalizeParamTest2,
  normalizeParamTest2Result,
  normalizeParamTest3,
  normalizeParamTest3Result,
  normalizeParamTest4,
  normalizeParamTest4Result,
  normalizeParamTest5,
  normalizeParamTest5Result,
  normalizeParamTest6,
  normalizeParamTest6Result,
  transitionFromParamTest,
  transitionFromParamTestResult,
  transitionsFromParamsTest1,
  transitionsFromParamsTest1Result,
  transitionsFromParamsTest2,
  transitionsFromParamsTest2Result,
} from './transitions.fixture';
import type {
  TransitionGenerator,
} from '../types/transitions';

describe('transitions', () => {
  describe('styleOfTransitions', () => {
    it('should be a function', () => {
      expect(styleOfTransitions).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(styleOfTransitions).toHaveLength(0);
    });
    it.each([
      {
        input: transitionsTest1,
        output: styleTransitionTest1,
      },
      {
        input: transitionsTest2,
        output: styleTransitionTest2,
      },
    ] as const)('styleOfTransitions(%#)', ({
      input,
      output,
    }) => {
      expect(styleOfTransitions(input)).toEqual(output);
    });
  });
  describe('propsOfTransitions', () => {
    it('should be a function', () => {
      expect(propsOfTransitions).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(propsOfTransitions).toHaveLength(0);
    });
    it.each([
      {
        input: transitionsTest1,
        output: propsTransitionTest1,
      },
      {
        input: transitionsTest2,
        output: propsTransitionTest2,
      },
    ] as const)('propsOfTransitions(%#)', ({
      input,
      output,
    }) => {
      expect(propsOfTransitions(input)).toEqual(output);
    });
  });
  describe('normalizeTransitionParam', () => {
    it('should be a function', () => {
      expect(normalizeTransitionParam).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(normalizeTransitionParam).toHaveLength(2);
    });
    it.each([
      {
        input: normalizeParamTest1,
        output: normalizeParamTest1Result,
      },
      {
        input: normalizeParamTest2,
        output: normalizeParamTest2Result,
      },
      {
        input: normalizeParamTest3,
        output: normalizeParamTest3Result,
      },
      {
        input: normalizeParamTest4,
        output: normalizeParamTest4Result,
      },
      {
        input: normalizeParamTest5,
        output: normalizeParamTest5Result,
      },
      {
        input: normalizeParamTest6,
        output: normalizeParamTest6Result,
      },
    ] as const)('normalizeTransitionParam(%#)', ({
      input,
      output,
    }) => {
      expect(normalizeTransitionParam(transitionsTest2, input as any)).toEqual(output);
    });
  });
  describe('transitionFromParam', () => {
    it('should be a function', () => {
      expect(transitionFromParam).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(transitionFromParam).toHaveLength(2);
    });
    it.each([
      {
        input: transitionFromParamTest,
        output: transitionFromParamTestResult,
      },
    ] as const)('transitionFromParam(%#)', ({
      input,
      output,
    }) => {
      expect(transitionFromParam(transitionsTest2, input as any)).toEqual(output);
    });
  });
  describe('transitionsFromParams', () => {
    it('should be a function', () => {
      expect(transitionsFromParams).toBeInstanceOf(Function);
    });
    it('should have one parameter (N params + transitions)', () => {
      expect(transitionsFromParams).toHaveLength(1);
    });
    it.each([
      {
        input: transitionsFromParamsTest1,
        output: transitionsFromParamsTest1Result,
      },
      {
        input: transitionsFromParamsTest2,
        output: transitionsFromParamsTest2Result,
      },
    ] as const)('transitionFromParams(%#)', ({
      input,
      output,
    }) => {
      expect(transitionsFromParams(transitionsTest2, ...input as any)).toEqual(output);
    });
  });
  describe('transitionsGeneratorOf', () => {
    it('should be a function', () => {
      expect(transitionsGeneratorOf).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(transitionsGeneratorOf).toHaveLength(1);
    });
    describe('transitionsGenerator', () => {
      let transitionsGenerator: TransitionGenerator<typeof transitionsTest2>;
      beforeEach(() => {
        transitionsGenerator = transitionsGeneratorOf(transitionsTest2);
      });
      it('should be a function', () => {
        expect(transitionsGenerator).toBeInstanceOf(Function);
      });
      it('should have no parameters (N parameters)', () => {
        expect(transitionsGenerator).toHaveLength(0);
      });
      it.each([
        {
          input: transitionsFromParamsTest1,
          output: transitionsFromParamsTest1Result,
        },
        {
          input: transitionsFromParamsTest2,
          output: transitionsFromParamsTest2Result,
        },
      ] as const)('transitionsGenerator(%#)', ({
        input,
        output,
      }) => {
        expect(transitionsGenerator(...input as any)).toEqual(output);
      });
    });
  });
});
