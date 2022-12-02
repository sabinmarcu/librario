import type {
  Meta,
  Story,
} from '@storybook/react';
import type {
  FC,
  HTMLAttributes,
} from 'react';
import {
  useMemo,
} from 'react';
import { useProvideTheme } from '../hooks/useProvideTheme';
import type {
  Theme,
  ThemeSet,
  ThemeType,
} from '../theme';
import { theme } from '../theme';

const { light: { theme: { palette } } } = theme;
const PaletteSlice: FC<{ name: keyof Theme['palette'] }> = ({
  name,
}) => {
  const slice = useMemo(
    () => palette[name],
    [palette, name],
  );
  return (
    <div>
      <h3>{name}</h3>
      <div style={{
        display: 'flex',
        flex: '1',
        flexFlow: 'row nowrap',
      }}
      >
        {Object.entries(slice).map(([key, value]) => (
          <div
            key={key}
            style={{
              width: 100,
              height: 100,
              background: value,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              border: '1px solid black',
            }}
          >
            <span style={{ background: 'white' }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Palette: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    {...props}
    style={{
      display: 'flex',
      flexFlow: 'column nowrap',
    }}
  >
    {Object.keys(palette).map((name) => (
      <PaletteSlice key={name} name={name as keyof typeof palette} />
    ))}
  </div>
);

type ShowcaseProps = { theme: ThemeType, name: keyof ThemeSet };

const Showcase: FC<ShowcaseProps> = ({
  theme: t,
  name,
}) => {
  const [className] = useProvideTheme(t, name);
  return (
    <Palette className={className} />
  );
};

export default {
  title: 'Theme/Palette',
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: Object.keys(theme),
      },
    },
  },
  excludeStories: ['Palette'],
} as Meta<ShowcaseProps>;

const Template: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

export const Light = Template.bind({});
Light.args = {
  theme: theme.light,
  name: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: theme.dark,
  name: 'dark',
};
