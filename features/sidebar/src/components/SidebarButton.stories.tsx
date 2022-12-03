import type {
  ComponentMeta,
  ComponentStory,
  Story,
} from '@storybook/react';
import {
  Paper,
  Button as StyledButton,
} from '@librario/ui';
import {
  argTypes,
  defaultArgs,
} from '@librario/ui/src/Button/storybook';
import styled from '@emotion/styled';
import type { FC } from 'react';
import { useAtom } from 'jotai';
import ReactIcon from 'mdi-react/ReactIcon';
import { sidebarOpen } from '../state/index';
import { SidebarButton } from './SidebarButton';

export default {
  title: 'Features/Sidebar/Button',
  component: SidebarButton,
  argTypes: {
    ...argTypes,
    type: {
      control: {
        type: 'select',
        options: [
          'open',
          'close',
          'toggle',
        ],
      },
    },
  },
  args: {
    ...defaultArgs,
    type: 'toggle',
  },
} as ComponentMeta<typeof SidebarButton>;

const Wrapper = styled(Paper)`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
`;

const Debug: FC = () => {
  const [isOpen] = useAtom(sidebarOpen);
  return (
    <StyledButton
      disabled
      color={isOpen ? 'success' : 'warning'}
      variant="contained"
    >
      {isOpen ? 'Open' : 'False'}
    </StyledButton>
  );
};

const Template: ComponentStory<typeof SidebarButton> = (args) => (
  <Wrapper>
    <SidebarButton {...args} />
    <Debug />
  </Wrapper>
);

export const Button = Template.bind({});

const ButtonTypeWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const ButtonTypes: Story = () => (
  <Wrapper>
    <ButtonTypeWrapper>
      <SidebarButton />
      Default (toggle)
    </ButtonTypeWrapper>
    <ButtonTypeWrapper>
      <SidebarButton type="close" />
      Close Button
    </ButtonTypeWrapper>
    <ButtonTypeWrapper>
      <SidebarButton type="open" />
      Open Button
    </ButtonTypeWrapper>
    <ButtonTypeWrapper>
      <SidebarButton type="toggle" />
      Toggle Button
    </ButtonTypeWrapper>
    <ButtonTypeWrapper>
      <SidebarButton icon={ReactIcon} />
      Custom Icon (toggle)
    </ButtonTypeWrapper>
    <Debug />
  </Wrapper>
);
ButtonTypes.parameters = {
  controls: { disable: true },
};
