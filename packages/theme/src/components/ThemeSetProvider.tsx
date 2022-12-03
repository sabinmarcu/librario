import type {
  FC,
  PropsWithChildren,
} from 'react';
import {
  ThemeSetContext,
  useProvideThemeSet,
} from '../hooks/useProvideThemeSet';
import type { ThemeSet } from '../theme/index';
import { themeSet } from '../theme/index';

interface ThemeSetProviderProps {
  themeSet?: ThemeSet;
}

export const ThemeSetProvider: FC<PropsWithChildren<ThemeSetProviderProps>> = ({
  themeSet: set = themeSet,
  children,
}) => {
  const context = useProvideThemeSet(set);
  return (
    <ThemeSetContext.Provider value={context}>
      {children}
    </ThemeSetContext.Provider>
  );
};
