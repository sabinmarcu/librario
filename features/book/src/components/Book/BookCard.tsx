import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  FC,
  PropsWithChildren,
} from 'react';
import MinusCircleOffOutlineIcon from 'mdi-react/MinusCircleOffOutlineIcon';
import { Flex } from '@librario/ui';
import {
  cardActions,
  cardCover,
  cardInner,
  cardStatus,
  cardTitle,
} from './constants';

export interface BookCardProps {
  disabled?: boolean
}

export const BookDisabledBanner = styled(Flex)`
  position: absolute;
  inset: 0;
  z-index: 20;
  color: ${theme.palette.error.main};
  opacity: 0.8 !important;
  & > * {
    width: 75%;
    height: 75%;
  }
`;

export const BookCardWrapper = styled.article<BookCardProps>(`
  width: 20rem;
  height: 30rem;
  transition: ${theme.transition.create('transform', 'boxShadow')};
  position: relative;
  box-shadow: ${theme.shadows[5]};
  transform: none;
  transform-origin: top center;
  [${cardInner}], [${cardActions}], [${cardTitle}], [${cardStatus}] {
    position: absolute;
    inset: 0;
    &, & * {
      z-index: 10;
    }
    pointer-events: none;
  }
  [${cardActions}] {
    top: 100%;
    bottom: auto;
    z-index: 3;
    transform: translateY(-100%);
    opacity: 0;
    transition: ${theme.transition.create('transform', 'opacity')};
  }
  [${cardCover}] {
    background: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    z-index: 5;
    img {
      opacity: 0.7;
      transition: ${theme.transition.create('opacity')};
    }
  }
  [${cardTitle}] {
    padding: 3rem 1.3rem 1rem;
    margin: 0;
    top: auto;
    background: linear-gradient(to top, hsla(0, 0%, 0%, 0.8), hsla(0, 0%, 0%, 0.7) 50%, hsla(0, 0%, 0%, 0));
    transition: ${theme.transition.create('paddingTop', 'color')};
    color: hsl(0, 0%, 80%);
  }
  [${cardStatus}] {
    top: 3rem;
    bottom: auto;
    left: auto;
    margin: 0;
    border-radius: ${theme.shape.borderRadius};
    transform: none;
    opacity: 0;
    transition: ${theme.transition.create('opacity', 'transform')};
  }
  &:hover {
    ${theme.breakpoints.mediaQuery('media', { lowerThan: 'md' })} {
      & {
        transform: none;
      }
    }
    [${cardActions}] {
      transform: none;
      opacity: 1;
      pointer-events: all;
    }
    [${cardCover}] img {
      opacity: 1;
    }
    [${cardTitle}] {
      padding-top: 10rem;
      color: hsl(0, 0%, 100%);
    }
    [${cardStatus}] {
      transform: translateX(30%);
      opacity: 1;
    }
    transform: scale(1.2);
    box-shadow: ${theme.shadows[15]};
  }
`,
({ disabled }) => `
  pointer-events: ${disabled ? 'none' : 'all'};
  & > * {
    opacity: ${disabled ? 0.4 : 1};
  }
`);

export const BookCard: FC<PropsWithChildren<BookCardProps>> = ({
  children,
  disabled,
}) => (
  <BookCardWrapper disabled={disabled}>
    {children}
    {disabled ? (
      <BookDisabledBanner center>
        <MinusCircleOffOutlineIcon />
      </BookDisabledBanner>
    ) : undefined}
  </BookCardWrapper>
);
