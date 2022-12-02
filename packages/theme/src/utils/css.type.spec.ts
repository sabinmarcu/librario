import {
  cssVariableOf,
  cssVariableStatement,
  isCssVariable,
  toKebabCase,
} from './css';

const toKebabCaseTest1 = toKebabCase('test');
//    ^? const toKebabCaseTest1: "test"

const toKebabCaseTest2 = toKebabCase('fooBar');
//    ^? const toKebabCaseTest2: "foo-bar"

const toKebabCaseTest3 = toKebabCase('fooBar baz');
//    ^? const toKebabCaseTest3: "foo-bar-baz"

const cssVariableOfTest1 = cssVariableOf('test');
//    ^? const cssVariableOfTest1: "--test"

const cssVariableOfTest2 = cssVariableOf('fooBar');
//    ^? const cssVariableOfTest2: "--foo-bar"

const cssVariableOfTest3 = cssVariableOf('fooBar baz');
//    ^? const cssVariableOfTest3: "--foo-bar-baz"

const cssVariableStatementTest1 = cssVariableStatement('--test');
//    ^? const cssVariableStatementTest1: "var(--test)"

const cssVariableStatementTest2 = cssVariableStatement('--test-awesome');
//    ^? const cssVariableStatementTest2: "var(--test-awesome)"

const cssVariableStatementTest3 = cssVariableStatement('--test-awesome-sauce');
//    ^? const cssVariableStatementTest3: "var(--test-awesome-sauce)"
