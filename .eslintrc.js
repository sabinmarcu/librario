// @ts-check

const { generateTsProjects } = require('@librario/eslint-config/utils/generateTsProjects');
const { generateImportResolver } = require('@librario/eslint-config/utils/generateImportResolver');
const pkg = require('./package.json');

const tsProjects = generateTsProjects(__dirname, pkg.workspaces);

/** @type import('eslint').Linter.Config */
const config = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['@librario'],
  parserOptions: {
    project: tsProjects,
  },
  ...generateImportResolver(tsProjects),
};

module.exports = config;
