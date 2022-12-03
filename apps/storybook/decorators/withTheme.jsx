import {
  css,
  Global,
} from '@emotion/react';
import styled from '@emotion/styled';
import {
  theme,
  ThemeSetProvider,
} from '@librario/theme';
import { useThemeSet } from '@librario/theme/src/hooks/useProvideThemeSet';
import { useEffect } from 'react';

const ThemeSwitcher = ({ theme: themeName }) => {
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
  StoryComponent,
  { globals: { theme: globalTheme = 'light' } },
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
