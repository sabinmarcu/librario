import {
  Config,
} from '../types';

const config = {
  overrides: [
    {
      files: [
        '*.jsx',
      ],
      extends: 'airbnb',
    },
  ],
} satisfies Config;

module.exports = config;
