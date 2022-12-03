import styled from '@emotion/styled';
import {
  theme,
  ThemeSetProvider,
} from '@librario/theme';
import type {
  Story,
  Meta,
} from '@storybook/react';
import type {
  ComponentType,
  PropsWithChildren,
} from 'react';
import { useMemo } from 'react';
import { withRipple } from './components/withRipple';

export default {
  title: 'Libs/Ripple',
} as Meta;

const RenderWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  gap: 1rem;
  border: solid 1px ${theme.palette.background.main};
  align-items: center;
  justify-content: center;
`;
const RenderRipple: Story<{
  Component: ComponentType<PropsWithChildren<{}>>,
  name: string,
}> = ({
  Component,
  name,
}) => {
  const ToRender = useMemo(
    () => withRipple(styled(Component)(`
      display: flex;
      width: 100px;
      height: 100px;
      align-items: center;
      justify-content: center;
      box-shadow: ${theme.shadows[1]};
      border: none;
      &, &:hover {
        background: ${theme.palette.background.paper};
        color: ${theme.palette.text.main};
      }
    `)),
    [Component],
  );
  return (
    <RenderWrapper>
      <ToRender />
      <div>{name}</div>
    </RenderWrapper>
  );
};

const Wrapper = styled.div(`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`);

export const Showcase: Story = () => (
  <ThemeSetProvider>
    <Wrapper>
      <h1>Ripple</h1>
      <RenderRipple Component={styled.div()} name="div" />
      <RenderRipple Component={styled.button()} name="button" />
    </Wrapper>
  </ThemeSetProvider>
);
