import type {
  FC,
  PropsWithChildren,
} from 'react';
import {
  ThemeSetContext,
  useProvideThemeSet,
} from '../hooks/useProvideThemeSet';
import type { ThemeSet } from '../theme/index';
import { theme } from '../theme/index';

interface ThemeSetProviderProps {
  themeSet?: ThemeSet;
}

export const ThemeSetProvider: FC<PropsWithChildren<ThemeSetProviderProps>> = ({
  themeSet = theme,
  children,
}) => {
  const context = useProvideThemeSet(themeSet);
  return (
    <ThemeSetContext.Provider value={context}>
      {children}
    </ThemeSetContext.Provider>
  );
};
