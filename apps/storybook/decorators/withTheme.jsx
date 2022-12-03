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
  color: ${theme.colors.text.main};
  ${theme.mixins.typography.body1};
  body:has(&) {
    background: ${theme.colors.background.main};
    color: ${theme.colors.text.main};
    ${theme.mixins.typography.body1};
    height: 100vh;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .docs-story:has(&) {
    background: ${theme.colors.background.main};
    color: ${theme.colors.text.main};
    ${theme.mixins.typography.body1};
  }
`);

export const withTheme = (
  StoryComponent,
  { globals: { theme: globalTheme = 'light' } },
) => (
  <ThemeSetProvider>
    <ThemeSwitcher theme={globalTheme} />
    <Wrapper>
      <StoryComponent />
    </Wrapper>
  </ThemeSetProvider>
);
