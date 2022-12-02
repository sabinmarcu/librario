import type {
  Meta,
  Story,
} from '@storybook/react';
import { useProvideTheme } from '../hooks/useProvideTheme';
import { theme as themeSet } from '../theme/index';

export default {
  title: 'Theme/Shadows',
} as Meta;

const theme = themeSet.light;
const { theme: { shadows } } = theme;

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
  const [className] = useProvideTheme(theme, 'light');
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
