import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@librario/theme';
import type { ButtonBaseProps } from '../types';

export const BaseButton = styled.button<ButtonBaseProps>(
  css`
    ${theme.mixins.typography.button};
    border-radius: ${theme.shape.borderRadius};
    border: none;
    background: transparent;
    padding: 0.5rem 0.8rem;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: solid 1px transparent;
    &, * {
      box-sizing: border-box;
    }
    &::after {
      content: "";
      pointer-events: none;
      background: transparent;
      position: absolute;
      transition: ${theme.transition.create('background')};
      inset: 0;
    }
    &::after {
      content: "";
      pointer-events: none;
      background: ${theme.colors.interactions.main};
      position: absolute;
      transition: ${theme.transition.create('opacity')};
      inset: 0;
      opacity: 0;
    }
    &:not(:disabled, :focus):hover::after {
      opacity: ${theme.interactions.hoverOpacity};
    }
    &:disabled {
      cursor: not-allowed;
      opacity: ${theme.interactions.disabledOpacity};
      &::after {
        opacity: ${theme.interactions.disabledOpacity};
      }
    }
    &:focus::after {
      opacity: ${theme.interactions.selectedOpacity};
    }
  `,
  ({ color }) => {
    if (!color || color === 'default') {
      return css`
        color: ${theme.colors.text.main};
      `;
    }
    return css`
      color: ${theme.palette[color].main};
    `;
  },
);
