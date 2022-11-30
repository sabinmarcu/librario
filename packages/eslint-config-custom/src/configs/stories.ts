import {
  Config,

} from '../types';

const config = {
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
} satisfies Config;

module.exports = config;
