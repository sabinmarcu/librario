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
import {
  controlDataAttribute,
  useProvideTheme,
} from './useProvideTheme';

interface ThemeSetContextType {
  selection: ThemeSelection,
  themeClasses: ThemeClassesType,
  inputSelector: string,
  setSelection: (selection: ThemeSelection) => void,
}

export type ThemeClassesType = Record<ThemeVariant, string>;
export const ThemeSetContext = createContext<ThemeSetContextType>({
  selection: 'system',
  themeClasses: { light: '', dark: '' },
  inputSelector: '',
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
          if (selection !== compare) {
            return;
          }
          const inputElement = document.querySelector<HTMLInputElement>(`[${input}]`);
          if (!inputElement) {
            return;
          }
          inputElement.checked = true;
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
    inputSelector: controlDataAttribute,
    setSelection,
  } as const satisfies ThemeSetContextType;
};

export const useThemeSet = () => useContext(ThemeSetContext);
