import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  Meta,
  Story,
} from '@storybook/react';
import ReactIcon from 'mdi-react/ReactIcon';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';
import { Flex } from '../Layout/Flex';
import { Paper } from '../Paper/Paper';
import { Surface } from '../Surface/Surface';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Features/Design System/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['default', ...Object.keys(theme.palette)],
      },
    },
  },
  args: {
    color: 'default',
  },
} as Meta<typeof ButtonGroup>;

const ShowcaseWrapper = styled(Surface)().withComponent(Flex);
ShowcaseWrapper.defaultProps = {
  gap: 1,
  align: 'flex-start',
  wrap: 'wrap',
};

const Wrapper = styled(Paper)(`
  padding: 1rem;
`).withComponent(ShowcaseWrapper);
Wrapper.defaultProps = {
  elevation: 2,
  grow: false,
};

const variants = ['contained', 'outlined', 'text'] as const;

const ButtonsTemplate: Story = (props) => (
  <ShowcaseWrapper>
    {variants.map((variant) => (
      <Wrapper key={variant}>
        <ButtonGroup>
          <Button {...props} variant={variant}>Button 1</Button>
          <Button {...props} variant={variant}>Button 2</Button>
          <Button {...props} variant={variant}>Button 3</Button>
        </ButtonGroup>
      </Wrapper>
    ))}
  </ShowcaseWrapper>
);

export const Buttons = ButtonsTemplate.bind({});

const IconButtonsTemplate: Story = (props) => (
  <ShowcaseWrapper>
    {variants.map((variant) => (
      <Wrapper key={variant}>
        <ButtonGroup>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
        </ButtonGroup>
      </Wrapper>
    ))}
  </ShowcaseWrapper>
);

export const IconButtons = IconButtonsTemplate.bind({});

const MixedButtonsTemplate: Story = (props) => (
  <ShowcaseWrapper>
    {variants.map((variant) => (
      <Wrapper key={variant}>
        <ButtonGroup>
          <Button {...props} variant={variant}>Button 1</Button>
          <Button {...props} variant={variant}>Button 2</Button>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
          <Button {...props} variant={variant}>Button 3</Button>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
          <IconButton {...props} variant={variant}><ReactIcon /></IconButton>
        </ButtonGroup>
      </Wrapper>
    ))}
  </ShowcaseWrapper>
);

export const MixedButtons = MixedButtonsTemplate.bind({});
