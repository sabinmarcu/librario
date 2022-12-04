import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  ComponentMeta,
  ComponentStory,
  Story,
} from '@storybook/react';
import { Surface } from './Surface';

const numShadows = Object.keys(theme.shadows).length;
export default {
  title: 'Libs/Design System/Surface',
  component: Surface,
  argTypes: {
    elevation: {
      control: {
        type: 'range',
        min: 0,
        max: numShadows - 1,
        step: 1,
      },
    },
  },
  args: {
    elevation: 0,
  },
} as ComponentMeta<typeof Surface>;

const SurfaceDemo = styled(Surface)`
  width: 30vw;
  height: 20vh;
  background: ${theme.colors.background.main};
  color: ${theme.colors.text.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: ComponentStory<typeof Surface> = (args) => (
  <SurfaceDemo {...args}>{JSON.stringify(args)}</SurfaceDemo>
);

export const Demo = Template.bind({});
Demo.args = {
  elevation: 0,
};

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem;
`;
export const Showcase: Story = () => (
  <ShowcaseWrapper>
    {Array.from({ length: numShadows }).map((_, i) => (
      <Template elevation={i as any} />
    ))}
  </ShowcaseWrapper>
);
