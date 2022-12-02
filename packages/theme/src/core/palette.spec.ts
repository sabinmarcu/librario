import {
  compileGeneratorPalette,
  compileGeneratorPaletteSlice,
  compileGeneratorStyle,
  compilePaletteSet,
  cssColorVariableOf,
} from './palette';
import {
  paletteInput,
  paletteSlices,
  paletteStyles,
  paletteTest,
  paletteVariables,
} from './palette.fixture';

describe('palette', () => {
  describe('cssColorVariableOf', () => {
    it('should be a function', () => {
      expect(cssColorVariableOf).toBeInstanceOf(Function);
    });
    it('should have one parameter', () => {
      expect(cssColorVariableOf).toHaveLength(1);
    });
    it.each([
      ['something', '--color-something'],
      ['somethingAwesome', '--color-something-awesome'],
      ['thing is false', '--color-thing-is-false'],
    ] as const)('cssColorVariableOf("%s") = %p', (value, expected) => {
      expect(cssColorVariableOf(value)).toBe(expected);
    });
  });

  describe('compileGeneratorStyle', () => {
    it('should be a function', () => {
      expect(compileGeneratorStyle).toBeInstanceOf(Function);
    });
    it('should have three parameters', () => {
      expect(compileGeneratorStyle).toHaveLength(3);
    });
    it.each([
      {
        name: 'primary',
        generator: paletteTest.primary,
        color: paletteInput.primary,
        output: paletteStyles.primary,
      },
      {
        name: 'secondary',
        generator: paletteTest.secondary,
        color: paletteInput.secondary,
        output: paletteStyles.secondary,
      },
    ])('compileGeneratorStyle($name, $generator, $color) = $output', ({
      name,
      generator,
      color,
      output,
    }) => {
      expect(compileGeneratorStyle(name, generator, color)).toEqual(output);
    });
  });

  describe('compileGeneratorPalette', () => {
    it('should be a function', () => {
      expect(compileGeneratorPalette).toBeInstanceOf(Function);
    });
    it('should have three parameters', () => {
      expect(compileGeneratorPalette).toHaveLength(2);
    });
    it.each([
      {
        name: 'primary',
        generator: paletteTest.primary,
        output: paletteVariables.primary,
      },
      {
        name: 'secondary',
        generator: paletteTest.secondary,
        output: paletteVariables.secondary,
      },
    ])('compileGeneratorPalette($name, $generator, $color) = $output', ({
      name,
      generator,
      output,
    }) => {
      expect(compileGeneratorPalette(name, generator)).toEqual(output);
    });
  });

  describe('compileGeneratorPaletteSlice', () => {
    it('should be a function', () => {
      expect(compileGeneratorPaletteSlice).toBeInstanceOf(Function);
    });
    it('should have three parameters', () => {
      expect(compileGeneratorPaletteSlice).toHaveLength(2);
    });
    it.each([
      {
        name: 'primary',
        generator: paletteTest.primary,
        output: paletteSlices.primary,
      },
      {
        name: 'secondary',
        generator: paletteTest.secondary,
        output: paletteSlices.secondary,
      },
    ])('compileGeneratorPaletteSlice($name, $generator, $color) = $output', ({
      name,
      generator,
      output,
    }) => {
      expect(compileGeneratorPaletteSlice(name, generator)).toEqual(output);
    });
  });

  describe('compilePaletteSet', () => {
    it('should be a function', () => {
      expect(compilePaletteSet).toBeInstanceOf(Function);
    });
    it('should have three parameters', () => {
      expect(compilePaletteSet).toHaveLength(2);
    });
    it.each([
      {
        set: paletteTest,
        input: paletteInput,
        output: {
          style: {
            ...paletteStyles.primary,
            ...paletteStyles.secondary,
          },
          palette: paletteVariables,
        },
      },
    ])('compilePaletteSet($name, $generator, $color) = $output', ({
      set,
      input,
      output,
    }) => {
      expect(compilePaletteSet(set, input)).toEqual(output);
    });
  });
});
