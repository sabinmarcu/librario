import {
  useEffect,
  useMemo,
} from 'react';
import {
  provideTag,
  provideControlsWrapper,
  provideStyleTag,
} from '@librario/utils';
import type { ThemeType } from '../theme/index';

export const controlDataAttribute = 'data-theme-control';
export const provideThemeControl = (
  wrapper: HTMLDivElement,
  name: string,
) => provideTag(
  `${controlDataAttribute}=${name}`,
  'input',
  wrapper,
);

export const useThemeControls = (
  name: string,
) => {
  const wrapper = useMemo(
    () => {
      const element = provideControlsWrapper();
      element.style.setProperty('position', 'fixed');
      element.style.setProperty('top', '-100vh');
      element.style.setProperty('left', '-100vw');
      return element;
    },
    [],
  );
  const control = useMemo(
    () => {
      const input = provideThemeControl(wrapper, name);
      if (input) {
        input.type = 'radio';
        input.name = controlDataAttribute;
      }
      return input;
    },
    [name, wrapper],
  );
  const selector = useMemo(
    () => `${controlDataAttribute}="${control.getAttribute(controlDataAttribute)}"`,
    [control],
  );
  return selector;
};

export const useProvideTheme = (
  theme: ThemeType,
  name: string,
  prefix = 'theme',
) => {
  const styleTag = useMemo(
    () => provideStyleTag(name),
    [name],
  );
  const styleClass = useMemo(
    () => `${prefix}-${name}`,
    [name, prefix],
  );
  const control = useThemeControls(name);
  useEffect(
    () => {
      const style = Object.entries(theme.style)
        .map(([k, v]) => `${k}: ${v};`)
        .join('\n');
      const contentBlocks = [];
      if (['light', 'dark'].includes(name)) {
        contentBlocks.push(`@media (prefers-color-scheme: ${name}) { body { ${style} } }`);
      }
      const selectors = [
        `.${styleClass}`,
        `body:has([${control}]:checked)`,
      ]
        .map((it) => [it, `${it} ::after`, `${it} ::before`])
        .reduce((acc, it) => [...acc, ...it], []);
      contentBlocks.push(`${selectors.join(', ')} { ${style} }`);
      styleTag.textContent = contentBlocks.join('\n');
    },
    [name, styleTag, theme.style, styleClass, control],
  );
  return [styleClass, control];
};
