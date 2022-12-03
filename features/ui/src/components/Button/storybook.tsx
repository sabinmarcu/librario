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
};

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

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

export type VariantStory = Story<{ variant: Variant }>;
export const compileColorsOfVariant = <T extends ComponentType<PropsWithChildren>>(
  Component: T,
  compileChild: (color: Colors | undefined) => ReactElement,
): VariantStory => {
  const ToRender = Component as any;
  const StoryComponent: VariantStory = ({ variant, ...props }) => (
    <ShowcaseWrapper>
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
