import type {
  CSSVariable,
  CSSVariableOf,
  CSSVarStatementOf,
} from './css';

type TestCSSVariable<Input extends string>
  = Input extends CSSVariable ? true : false;

type TestCSSVariableTest1 = TestCSSVariable<'--test'>;
//     ^? type TestCSSVariableTest1 = true

type TestCSSVariableTest2 = TestCSSVariable<'--test-1'>;
//     ^? type TestCSSVariableTest2 = true

type TestCSSVariableTest3 = TestCSSVariable<'-test-1-2'>;
//     ^? type TestCSSVariableTest3 = false

type TestCSSVariableOf1 = CSSVariableOf<'test'>;
//     ^? type TestCSSVariableOf1 = "--test"

type TestCSSVariableOf2 = CSSVariableOf<'test-1'>;
//     ^? type TestCSSVariableOf2 = "--test-1"

type TestCSSVariableOf3 = CSSVariableOf<'testAwesome'>;
//     ^? type TestCSSVariableOf3 = "--test-awesome"

type TestCSSVarStatementOf1 = CSSVarStatementOf<'--test'>;
//     ^? type TestCSSVarStatementOf1 = "var(--test)"

type TestCSSVarStatementOf2 = CSSVarStatementOf<'--test-1'>;
//    ^? type TestCSSVarStatementOf2 = "var(--test-1)"
