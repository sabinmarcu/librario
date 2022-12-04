import styled from '@emotion/styled';
import { theme } from '@librario/theme';
import type {
  ComponentType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import type {
  ComponentStory,
  Story,
} from '@storybook/react';
import type {
  Colors,
  Variant,
} from './types';
import { Paper } from '../Paper/Paper';

export const argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['default', ...Object.keys(theme.palette)],
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['default', 'contained', 'outlined', 'text'],
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  onClick: { action: 'onClick' },
};

export const defaultArgs = {
  color: 'default',
  variant: 'contained',
  disabled: false,
};

export const compileTemplate = <T extends ComponentType<PropsWithChildren>>(
  Component: T,
  Child: (ReactElement | (() => ReactElement)),
): ComponentStory<T> => ({ children, ...args }) => {
  const ToRender = Component as any;
  return (
    // @ts-ignore
    <ToRender {...args}>{children || <Child />}</ToRender>
  );
};

const ShowcaseRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ShowcaseSet = styled(Paper)`
  padding: 1rem;
`;

const ShowcaseWrapper = styled(ShowcaseRow)`
  flex-flow: column nowrap;
`;

export type VariantStory = Story<{ variant: Variant }>;
export const compileColorsOfVariant = <T extends ComponentType<PropsWithChildren>>(
  Component: T,
  compileChild: (color: Colors | undefined) => ReactElement,
): VariantStory => {
  const ToRender = Component as any;
  const StoryComponent: VariantStory = ({ variant, ...props }) => (
    <ShowcaseWrapper>
      <ShowcaseSet>
        <h4>Default</h4>
        <ShowcaseRow>
          {[
            undefined,
            ...(Object
              .keys(theme.palette)
              .filter((it) => !['background'].includes(it)) as Colors[]
            ),
          ].map((color) => (
            <ToRender
              {...props}
              variant={variant}
              key={color || 'default'}
              color={color}
            >
              {compileChild(color)}
            </ToRender>
          ))}
        </ShowcaseRow>
      </ShowcaseSet>
      <ShowcaseSet>
        <h4>Disabled</h4>
        <ShowcaseRow>
          {[
            undefined,
            ...(Object
              .keys(theme.palette)
              .filter((it) => !['background'].includes(it)) as Colors[]
            ),
          ].map((color) => (
            <ToRender
              {...props}
              variant={variant}
              key={color || 'default'}
              color={color}
              disabled
            >
              {compileChild(color)}
            </ToRender>
          ))}
        </ShowcaseRow>
      </ShowcaseSet>
    </ShowcaseWrapper>
  );
  StoryComponent.argTypes = {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text', 'default'] satisfies Variant[],
      },
    },
  };
  return StoryComponent;
};
