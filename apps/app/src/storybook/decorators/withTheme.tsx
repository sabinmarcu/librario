import {
  css,
  Global,
} from '@emotion/react';
import styled from '@emotion/styled';
import type { ThemeVariant } from '@librario/theme';
import {
  theme,
  ThemeSetProvider,
} from '@librario/theme';
import { useThemeSet } from '@librario/theme/src/hooks/useProvideThemeSet';
import type { Story } from '@storybook/react';
import { useEffect } from 'react';

const ThemeSwitcher = ({ theme: themeName }: { theme: ThemeVariant }) => {
  const { setSelection } = useThemeSet();
  useEffect(
    () => {
      setSelection(themeName);
    },
    [themeName],
  );
  return null;
};

const Wrapper = styled.section(`  
  background: ${theme.colors.background.main};
  .docs-story:has(&) {
    background: ${theme.colors.background.main};
  }
`);

export const withTheme = (
  StoryComponent: Story,
  { globals: { theme: globalTheme = 'light' } }: any,
) => (
  <ThemeSetProvider>
    <Global styles={css`
      body {
        background: ${theme.colors.background.main};
        overflow: hidden;
      }
    `}
    />
    <ThemeSwitcher theme={globalTheme} />
    <Wrapper>
      <StoryComponent />
    </Wrapper>
  </ThemeSetProvider>
);
