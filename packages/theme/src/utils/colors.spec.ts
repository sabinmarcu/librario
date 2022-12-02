import { isHslColor } from './colors';

describe('colors', () => {
  describe('isHslColor', () => {
    it('should be a function', () => {
      expect(isHslColor).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(isHslColor).toHaveLength(1);
    });
    it.each([
      ['hsl(50, 0%, 50%)', true],
      ['hsl(50, 50%, 50%)', true],
      ['hsl(50, 50, 50%)', false],
    ])('isHslColor("%s") = %p', (value, expected) => {
      expect(isHslColor(value)).toBe(expected);
    });
  });
});
