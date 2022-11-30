// @ts-check

const { generateTsProjects } = require('eslint-config-custom/utils/generateTsProjects');
const { generateImportResolver } = require('eslint-config-custom/utils/generateImportResolver');
const pkg = require('./package.json');

const tsProjects = generateTsProjects(__dirname, pkg.workspaces);

/** @type import('eslint').Linter.Config */
const config = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  parserOptions: {
    project: tsProjects,
  },
  ...generateImportResolver(tsProjects),
};

module.exports = config;
