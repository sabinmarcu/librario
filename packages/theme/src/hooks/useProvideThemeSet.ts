import {
  createContext,
  useContext,
  useEffect,
} from 'react';
import type {
  ThemeSelection,
  ThemeSet,
  ThemeVariant,
} from '../theme/index';
import { useLocalStorage } from './useLocalStorage';
import { useProvideTheme } from './useProvideTheme';

interface ThemeSetContextType {
  selection: ThemeSelection,
  themeClasses: ThemeClassesType,
  setSelection: (selection: ThemeSelection) => void,
}

export type ThemeClassesType = Record<ThemeVariant, string>;
export const ThemeSetContext = createContext<ThemeSetContextType>({
  selection: 'system',
  themeClasses: { light: '', dark: '' },
  setSelection: () => { throw new Error('ThemeSetContext not provided'); },
});

export const useProvideThemeSet = (
  themeSet: ThemeSet,
) => {
  const [lightClass, lightInput] = useProvideTheme(themeSet.light, 'light');
  const [darkClass, darkInput] = useProvideTheme(themeSet.dark, 'dark');
  const [selection, setSelection] = useLocalStorage<ThemeSelection>('themeSelection', 'system');
  useEffect(
    () => {
      [lightInput, darkInput].forEach((input) => {
        if (input) {
          const [, value] = input.split('=');
          const compare = JSON.parse(value);
          const inputElement = document.querySelector<HTMLInputElement>(`[${input}]`);
          if (!inputElement) {
            return;
          }
          inputElement.checked = selection === compare;
        }
      });
    },
    [selection, lightInput, darkInput],
  );
  return {
    selection: selection || 'system',
    themeClasses: {
      light: lightClass,
      dark: darkClass,
    },
    setSelection,
  } as const satisfies ThemeSetContextType;
};

export const useThemeSet = () => useContext(ThemeSetContext);
