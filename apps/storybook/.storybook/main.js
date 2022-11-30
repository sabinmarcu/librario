const path = require('path');
const fs = require('fs');

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
      propFilter: (prop) => {
        console.log(prop.parent?.name);
        return (prop.parent
          ? /@librario/.test(prop.parent.fileName)
          : true);
      },
    },
  },
};
