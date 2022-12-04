import type {
  ComponentMeta,
  Story as StoryType,
  ComponentStory,
} from '@storybook/react';
import styled from '@emotion/styled';
import {
  css,
  Global,
} from '@emotion/react';
import type { FC } from 'react';
import { useRef } from 'react';
import {
  Toolbar as Component,
} from './Toolbar';
import { Paper } from '../../Paper/Paper';
import { Surface } from '../../Surface/Surface';
import { Container } from '../../Layout/Container';
import { Flex } from '../../Layout/Flex';
import { Typography } from '../../Typography/Typography';
import { Button } from '../../Button/Button';

const sizeDecorator = (Story: StoryType) => (
  <>
    <Global styles={css`
      body, #root, #root > * {
        width: 100vw;
        height: 100vh;
        padding: 0 !important;
        margin: 0 !important;
      }
    `}
    />
    <Story />
  </>
);

export default {
  title: 'Features/Toolbar',
  component: Component,
  decorators: [sizeDecorator],
  argTypes: {
    trackScroll: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    trackScroll: true,
  },
} as ComponentMeta<typeof Component>;

const Wrapper = styled(Paper)`
  width: 40vw;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;
Wrapper.defaultProps = {
  elevation: 4,
};

const FullWidthWrapper = styled(Surface)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

const ScrollWrapper = styled(Surface)`
  width: 100%;
  height: 200%;
`;

const Content: FC = () => (
  <Container>
    <Flex align="center" justify="space-between">
      <Typography variant="h4">Toolbar</Typography>
      <Button variant="outlined">Click Here!</Button>
    </Flex>
  </Container>
);
const Template: ComponentStory<typeof Component> = (props) => {
  const ref = useRef<any>(null);
  return (
    <FullWidthWrapper ref={ref}>
      <ScrollWrapper>
        <Component trackTarget={ref} {...props}>
          <Content />
        </Component>
      </ScrollWrapper>
    </FullWidthWrapper>
  );
};

export const Showcase = Template.bind({});

const WithContainer: FC<{ withScroll: boolean }> = ({ withScroll }) => {
  const ref = useRef<any>(null);
  return (
    <Wrapper ref={ref}>
      <ScrollWrapper>
        <Component trackTarget={ref} trackScroll={withScroll}>
          <Content />
        </Component>
        <Typography variant="h4">{withScroll ? 'Scroll Enabled' : 'Scroll Disabled'}</Typography>
      </ScrollWrapper>
    </Wrapper>
  );
};

export const Variants: FC = () => (
  <Flex grow align="center" justify="center" gap={5} style={{ padding: '5rem' }}>
    <WithContainer withScroll={false} />
    <WithContainer withScroll />
  </Flex>
);
