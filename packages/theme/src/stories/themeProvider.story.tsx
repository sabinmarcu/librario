import type {
  Meta,
  Story,
} from '@storybook/react';
import { useCallback } from 'react';
import { ThemeSetProvider } from '../components/ThemeSetProvider';
import { useThemeSet } from '../hooks/useProvideThemeSet';
import type { ThemeSelection } from '../theme/index';
import { Palette } from './palette.story';

export default {
  title: 'Libs/Theme/Theme Provider',
} as Meta;

const SetButton: Story<{ which: ThemeSelection }> = ({
  which,
}) => {
  const { setSelection } = useThemeSet();
  const onClick = useCallback(
    () => setSelection(which),
    [setSelection, which],
  );
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {which}
    </button>
  );
};

const Display: Story = () => {
  const { selection } = useThemeSet();
  return (
    <p>
      Selected Story:
      {' '}
      {selection}
    </p>
  );
};

export const Showcase: Story = () => (
  <ThemeSetProvider>
    <>
      <Display />
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
      }}
      >
        <SetButton which="light" />
        <SetButton which="dark" />
        <SetButton which="system" />
      </div>
      <Palette />
    </>
  </ThemeSetProvider>
);
