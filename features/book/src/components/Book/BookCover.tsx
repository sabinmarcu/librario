import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import {
  Flex,
  Spinner,
} from '@librario/ui';
import type { ComponentProps } from 'react';
import {
  forwardRef,
} from 'react';
import AlertCircleOutlineIcon from 'mdi-react/AlertCircleOutlineIcon';
import { cardCover } from './constants';
import type { ISBNProps } from '../../types';
import { useCoverImage } from '../../hooks/useCoverImage';

export interface Visible {
  active: boolean;
}
export const visibleStyle = ({ active }: Visible) => `
  opacity: ${active ? 1 : 0};
`;
export const visibleTransition = `
  transition: ${theme.transition.create('opacity')};
`;

export const Wrapper = styled(Flex)`
  min-width: 200px;
  height: 100%;
  width: 100%;
  position: relative;
`;
Wrapper.defaultProps = {
  [cardCover]: true,
} as any;

export const Layer = styled.div<Visible>(`
    position: absolute;
    inset: 0x;
    width: 100%;
    height: 100%;
    ${visibleTransition}
  `,
visibleStyle);

export const BookRaw = styled(Layer)(`
  border: none;
  object-fit: cover;
  position: static;
`).withComponent('img');

export const Loader = Layer.withComponent(Spinner);
export const Error = styled(Layer)(`
  & > * {
    width: 75%;
    height: 75%;
    color: ${theme.palette.error.main};
  }
`).withComponent(Flex);

export interface BookCoverProps extends Omit<ComponentProps<typeof BookRaw>, 'isbn' | 'active'>, ISBNProps {}
export const BookCover = forwardRef<HTMLImageElement, BookCoverProps>(
  ({ isbn, ...props }, ref) => {
    const [src, loading, error] = useCoverImage({ isbn });
    return (
      <Wrapper center grow>
        <BookRaw
          {...props}
          ref={ref}
          src={src}
          active={!!src && !loading && !error}
        />
        <Error active={error} center>
          <AlertCircleOutlineIcon />
        </Error>
        <Loader stretch active={loading} />
      </Wrapper>
    );
  },
);
