const path = require('path');
const fs = require('fs');
const { mergeConfig } = require('vite');

const rootPath = '../../../';
const root = path.resolve(__dirname, rootPath);
const { workspaces } = JSON.parse(
  fs.readFileSync(
    path.resolve(root, 'package.json'),
    'utf8',
  ),
);

const extensions = ['mdx', 'tsx'];
const stories = workspaces.map(
  (workspace) => `${rootPath}${workspace}/src/**/*.@(stories|story).@(${extensions.join('|')})`,
);

module.exports = {
  stories,
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => (prop.parent
        ? /@librario/.test(prop.parent.fileName)
        : true),
    },
  },
  async viteFinal(config) {
    /** @type {import('vite').UserConfig} */
    const newConfig = {
      esbuild: {
        target: 'es2020',
      },
    };
    return mergeConfig(config, newConfig);
  },
};
