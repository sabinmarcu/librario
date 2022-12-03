import type {
  Config,
} from './types';

const config = {
  extends: [
    './configs/js',
    './configs/jsx',
    './configs/ts',
    './configs/tsx',
    './configs/config',
    './configs/ts.expect',
    './configs/module',
    './configs/stories',
    './configs/overrides',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
} satisfies Config;

module.exports = config;
