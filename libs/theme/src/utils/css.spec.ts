import {
  cssVariableOf,
  cssVariableStatement,
  isCssVariable,
  toKebabCase,
} from './css';

describe('css', () => {
  describe('toKebabCase', () => {
    it('should be a function', () => {
      expect(toKebabCase).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(toKebabCase).toHaveLength(1);
    });
    it.each([
      ['something', 'something'],
      ['somethingAwesome', 'something-awesome'],
      ['thing is false', 'thing-is-false'],
    ] as const)('toKebabCase("%s") = %p', (value, expected) => {
      expect(toKebabCase(value)).toBe(expected);
    });
  });
  describe('cssVariableOf', () => {
    it('should be a function', () => {
      expect(cssVariableOf).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(cssVariableOf).toHaveLength(1);
    });
    it.each([
      ['something', '--something'],
      ['somethingAwesome', '--something-awesome'],
      ['thing is false', '--thing-is-false'],
    ] as const)('cssVariableOf("%s") = %p', (value, expected) => {
      expect(cssVariableOf(value)).toBe(expected);
    });
  });
  describe('isCssVariable', () => {
    it('should be a function', () => {
      expect(isCssVariable).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(isCssVariable).toHaveLength(1);
    });
    it.each([
      ['something', false],
      ['--something', true],
      ['--something-awesome', true],
    ] as const)('isCssVariable("%s") = %p', (value, expected) => {
      expect(isCssVariable(value)).toBe(expected);
    });
  });
  describe('cssVariableStatement', () => {
    it('should be a function', () => {
      expect(cssVariableStatement).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(cssVariableStatement).toHaveLength(1);
    });
    it.each([
      ['--something', 'var(--something)'],
      ['--something-awesome', 'var(--something-awesome)'],
    ] as const)('cssVariableStatement("%s") = %p', (value, expected) => {
      expect(cssVariableStatement(value)).toBe(expected);
    });
  });
});
