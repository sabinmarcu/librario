import {
  injectGlobal,
} from '@emotion/css';
import { theme } from '@librario/theme';

injectGlobal(`
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background: ${theme.colors.background.main};
    color: ${theme.colors.text.main};
  }
  * {
    box-sizing: border-box;
  }
`);
