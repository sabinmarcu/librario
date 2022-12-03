const path = require('path');
const fs = require('fs');
const { mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');

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
  (workspace) => `${rootPath}${workspace}/src/**/*.stories.@(${extensions.join('|')})`,
);

module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
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
    // Remove old react plugin to add one with emotion
    const reactPluginIndex = config.plugins.findIndex(
      (plugin) => Array.isArray(plugin) && plugin.every(({ name }) => name.startsWith('vite:react-')),
    );
    config.plugins.splice(reactPluginIndex, 1, react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }));

    /** @type {import('vite').UserConfig} */
    const newConfig = {
      esbuild: {
        target: 'es2020',
      },
      // plugins,
    };
    return mergeConfig(config, newConfig);
  },
};
