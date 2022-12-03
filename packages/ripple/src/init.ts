import {
  css,
} from '@emotion/css';
import { RippleContainerIndentifier } from './constants';

document.body.classList.add(css`
  *[data-${RippleContainerIndentifier}] {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
`);
