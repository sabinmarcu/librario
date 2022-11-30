import {
  Config,
} from '../types';

const config = {
  overrides: [
    {
      files: [
        '*.ts',
      ],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
      ],
    },
  ],
} satisfies Config;

module.exports = config;
