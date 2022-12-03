import type {
  Meta,
  Story,
} from '@storybook/react';
import { useProvideTheme } from '../hooks/useProvideTheme';
import {
  theme,
  themeSet,
} from '../theme/index';

export default {
  title: 'Libs/Theme/Shadows',
} as Meta;

const { shadows } = theme;

const Shadow: Story<{ name: keyof typeof shadows }> = ({
  name,
}) => (
  <div style={{
    width: 100,
    height: 100,
    background: 'white',
    boxShadow: shadows[name],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column nowrap',
  }}
  >
    <span>elevation</span>
    <span>{name}</span>
  </div>
);

export const Showcase: Story = () => {
  const [className] = useProvideTheme(themeSet.light, 'light');
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: '2rem',
        flexFlow: 'row wrap',
      }}
    >
      {Object.keys(shadows).map((name) => (
        <Shadow key={name} name={name as unknown as keyof typeof shadows} />
      ))}
    </div>
  );
};
