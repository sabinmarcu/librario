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
  body, #root {
    flex: 1;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
  #root > * {
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
`);
