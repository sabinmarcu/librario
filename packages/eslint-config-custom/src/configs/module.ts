import {
  Config,

} from '../types';

const config = {
  overrides: [
    {
      files: [
        '*.mjs',
        '*.mts',
      ],
      rules: {
        'import/extensions': [
          'error',
          'always',
        ],
      },
    },
  ],
} satisfies Config;

module.exports = config;
