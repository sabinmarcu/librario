import {
  Config,
} from '../types';

const config = {
  overrides: [
    {
      files: [
        '*.tsx',
      ],
      extends: [
        'airbnb',
        'airbnb-typescript',
      ],
    },
  ],
} satisfies Config;

module.exports = config;
