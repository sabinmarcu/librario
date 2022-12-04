import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  ComponentMeta,
  ComponentStory,
  Story,
} from '@storybook/react';
import { Paper } from './Paper';

const numShadows = Object.keys(theme.shadows).length;
export default {
  title: 'Features/Design System/Paper',
  component: Paper,
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
} as ComponentMeta<typeof Paper>;

const SurfaceDemo = styled(Paper)`
  width: 30vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: ComponentStory<typeof Paper> = (args) => (
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
