import {
  Config,
} from '../types';

const config = {
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.js',
        '*.jsx',
      ],
      plugins: [
        'modules-newlines',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: [
              '.mjs',
              '.cjs',
              '.js',
              '.jsx',
              '.json',
              '.mts',
              '.cts',
              '.ts',
              '.tsx',
              '.d.ts',
            ],
          },
        },
      },
      rules: {
        'modules-newlines/import-declaration-newline': 'error',
        'modules-newlines/export-declaration-newline': 'error',
        'global-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            ignoredNodes: [
              'TSTypeParameterInstantiation',
            ],
          },
        ],
      },
    },
  ],
} satisfies Config;

module.exports = config;
