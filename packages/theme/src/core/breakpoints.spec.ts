import type {
  MediaQueryBuilder,
  QueryBuilder,
} from '../types/breakpoints';
import {
  cssVariableOf,
  cssVariableStatement,
} from '../utils/css';
import {
  betweenQuery,
  breakpointsOf,
  breakpointsPropsOf,
  breakpointsStyleOf,
  cssBreakpointVariableOf,
  greaterThanQuery,
  lowerThanQuery,
  maxWidthQuery,
  mediaQueryBuilderFrom,
  minWidthQuery,
  orientationQuery,
  pixelsOf,
  queryBuilderFrom,
} from './breakpoints';
import type {
  MediaQueryTestType,
  OrientationTestType,
  QueryTestType,
  RawQueryTestType,
  TestBreakpoints,
} from './breakpoints.fixture';
import {
  breakpointsProps,
  breakpointsResult,
  breakpointsStyle,
  breakpointsTest,
} from './breakpoints.fixture';

describe('breakpoints', () => {
  describe('cssBreakpointVariableOf', () => {
    it('should be a function', () => {
      expect(cssBreakpointVariableOf).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(cssBreakpointVariableOf).toHaveLength(1);
    });
    it.each([
      ['something', '--breakpoint-something'],
      ['somethingAwesome', '--breakpoint-something-awesome'],
      ['thing is false', '--breakpoint-thing-is-false'],
    ] as const)('cssBreakpointVariableOf("%s") = %p', (value, expected) => {
      expect(cssBreakpointVariableOf(value)).toBe(expected);
    });
  });
  describe('pixelsOf', () => {
    it('should be a function', () => {
      expect(pixelsOf).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(pixelsOf).toHaveLength(1);
    });
    it.each([
      [1, '1px'],
      [42, '42px'],
    ] as const)('pixelsOf("%s") = %p', (value, expected) => {
      expect(pixelsOf(value)).toBe(expected);
    });
  });
  describe('breakpointsStyleOf', () => {
    it('should be a function', () => {
      expect(breakpointsStyleOf).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(breakpointsStyleOf).toHaveLength(0);
    });
    it.each([
      {
        input: breakpointsTest,
        output: breakpointsStyle,
      },
    ])('breakpointsStyleOf($input) = $output', ({
      input,
      output,
    }) => {
      expect(breakpointsStyleOf(input)).toEqual(output);
    });
  });
  describe('breakpointsPropsOf', () => {
    it('should be a function', () => {
      expect(breakpointsPropsOf).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(breakpointsPropsOf).toHaveLength(0);
    });
    it.each([
      {
        input: breakpointsTest,
        output: breakpointsProps,
      },
    ])('breakpointsPropsOf($input) = $output', ({
      input,
      output,
    }) => {
      expect(breakpointsPropsOf(input)).toEqual(output);
    });
  });
  describe('breakpointsOf', () => {
    it('should be a function', () => {
      expect(breakpointsOf).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(breakpointsOf).toHaveLength(0);
    });
    it.each([
      {
        input: breakpointsTest,
        output: breakpointsResult,
      },
    ])('breakpointsOf($input) = $output', ({
      input,
      output,
    }) => {
      expect(breakpointsOf(input)).toEqual(output);
    });
  });
  describe('minWidthQuery', () => {
    it('should be a function', () => {
      expect(minWidthQuery).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(minWidthQuery).toHaveLength(1);
    });
    it.each([
      {
        input: 'thing',
        output: '(min-width: var(--thing))',
      },
      {
        input: 'camelCase',
        output: '(min-width: var(--camel-case))',
      },
    ])('minWidthQuery($input) = $output', ({
      input,
      output,
    }) => {
      expect(minWidthQuery(cssVariableStatement(cssVariableOf(input)))).toEqual(output);
    });
  });
  describe('maxWidthQuery', () => {
    it('should be a function', () => {
      expect(maxWidthQuery).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(maxWidthQuery).toHaveLength(1);
    });
    it.each([
      {
        input: 'thing',
        output: '(max-width: var(--thing))',
      },
      {
        input: 'camelCase',
        output: '(max-width: var(--camel-case))',
      },
    ])('maxWidthQuery($input) = $output', ({
      input,
      output,
    }) => {
      expect(maxWidthQuery(cssVariableStatement(cssVariableOf(input)))).toEqual(output);
    });
  });
  describe('lowerThanQuery', () => {
    it('should be a function', () => {
      expect(lowerThanQuery).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(lowerThanQuery).toHaveLength(2);
    });
    it.each([
      {
        breakpoints: breakpointsTest,
        input: 'test',
        output: '(max-width: 1px)',
      },
      {
        breakpoints: breakpointsTest,
        input: 'testThing',
        output: '(max-width: 42px)',
      },
    ] satisfies RawQueryTestType[])('lowerThanQuery(BPs, $input) = $output', ({
      breakpoints,
      input,
      output,
    }) => {
      expect(lowerThanQuery(breakpoints, input)).toEqual(output);
    });
  });
  describe('greaterThanQuery', () => {
    it('should be a function', () => {
      expect(greaterThanQuery).toBeInstanceOf(Function);
    });
    it('should have two parameters', () => {
      expect(greaterThanQuery).toHaveLength(2);
    });
    it.each([
      {
        breakpoints: breakpointsTest,
        input: 'test',
        output: '(min-width: 1px)',
      },
      {
        breakpoints: breakpointsTest,
        input: 'testThing',
        output: '(min-width: 42px)',
      },
    ] satisfies RawQueryTestType[])('greaterThanQuery(BPs, $input) = $output', ({
      breakpoints,
      input,
      output,
    }) => {
      expect(greaterThanQuery(breakpoints, input)).toEqual(output);
    });
  });
  describe('betweenQuery', () => {
    it('should be a function', () => {
      expect(betweenQuery).toBeInstanceOf(Function);
    });
    it('should have three parameters', () => {
      expect(betweenQuery).toHaveLength(3);
    });
    it.each([
      {
        breakpoints: breakpointsTest,
        input: ['test', 'testThing'],
        output: '(min-width: 1px) and (max-width: 42px)',
      },
      {
        breakpoints: breakpointsTest,
        input: ['testThing', 'test'],
        output: '(min-width: 42px) and (max-width: 1px)',
      },
    ] satisfies RawQueryTestType[])('betweenQuery(BPs, $input) = $output', ({
      breakpoints,
      input: [start, end],
      output,
    }) => {
      expect(betweenQuery(breakpoints, start, end)).toEqual(output);
    });
  });
  describe('orientationQuery', () => {
    it('should be a function', () => {
      expect(orientationQuery).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(orientationQuery).toHaveLength(1);
    });
    it.each([
      {
        input: 'landscape',
        output: '(orientation: landscape)',
      },
      {
        input: 'portrait',
        output: '(orientation: portrait)',
      },
    ] satisfies OrientationTestType[])('orientationQuery(BPs, $input) = $output', ({
      input,
      output,
    }) => {
      expect(orientationQuery(input)).toEqual(output);
    });
  });
  describe('queryBuilderFrom', () => {
    it('should be a function', () => {
      expect(queryBuilderFrom).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(queryBuilderFrom).toHaveLength(0);
    });
    describe('queryBuilderInstance', () => {
      let queryBuilder: QueryBuilder<TestBreakpoints>;
      beforeAll(() => {
        queryBuilder = queryBuilderFrom(breakpointsTest);
      });
      it('should be a function', () => {
        expect(queryBuilder).toBeInstanceOf(Function);
      });
      it('should have no parameters (N parameters, dynamic)', () => {
        expect(queryBuilder).toHaveLength(0);
      });
      it.each([
        {
          input: [],
          output: '',
        },
        {
          input: [{ lowerThan: 'test' }],
          output: '(max-width: 1px)',
        },
        {
          input: [{ lowerThan: 'test' }, { greaterThan: 'testThing' }],
          output: '(max-width: 1px) and (min-width: 42px)',
        },
        {
          input: ['not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' }],
          output: 'not screen and (max-width: 1px) and not (min-width: 42px)',
        },
        {
          input: ['not', 'screen', { between: ['test', 'testThing'] }],
          output: 'not screen and (min-width: 1px) and (max-width: 42px)',
        },
      ] satisfies QueryTestType[])('queryBuilder(BPs, $input) = $output', ({
        input,
        output,
      }) => {
        expect(queryBuilder(...input)).toEqual(output);
      });
    });
  });
  describe('mediaQueryBuilderFrom', () => {
    it('should be a function', () => {
      expect(mediaQueryBuilderFrom).toBeInstanceOf(Function);
    });
    it('should have no parameters (memoized)', () => {
      expect(mediaQueryBuilderFrom).toHaveLength(0);
    });
    describe('mediaQueryBuilder', () => {
      let mediaQueryBuilder: MediaQueryBuilder<TestBreakpoints>;
      beforeAll(() => {
        mediaQueryBuilder = mediaQueryBuilderFrom(breakpointsTest);
      });
      it('should be a function', () => {
        expect(mediaQueryBuilder).toBeInstanceOf(Function);
      });
      it('should have one parameter (media + N parameters, dynamic)', () => {
        expect(mediaQueryBuilder).toHaveLength(1);
      });
      it.each([
        {
          media: 'media',
          input: [],
          output: '',
        },
        {
          media: 'media',
          input: [{ lowerThan: 'test' }],
          output: '@media (max-width: 1px)',
        },
        {
          media: 'media',
          input: [{ lowerThan: 'test' }, { greaterThan: 'testThing' }],
          output: '@media (max-width: 1px) and (min-width: 42px)',
        },
        {
          media: 'media',
          input: ['not', 'screen', { lowerThan: 'test' }, 'not', { greaterThan: 'testThing' }],
          output: '@media not screen and (max-width: 1px) and not (min-width: 42px)',
        },
        {
          media: 'media',
          input: ['not', 'screen', { between: ['test', 'testThing'] }],
          output: '@media not screen and (min-width: 1px) and (max-width: 42px)',
        },
      ] satisfies MediaQueryTestType[])('mediaQueryBuilder(BPs, $input) = $output', ({
        media,
        input,
        output,
      }) => {
        expect(mediaQueryBuilder(media, ...input)).toEqual(output);
      });
    });
  });
});
