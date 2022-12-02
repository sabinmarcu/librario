import {
  useEffect,
  useMemo,
} from 'react';
import type { ThemeType } from '../theme/index';

export const provideTag = <Element extends keyof HTMLElementTagNameMap>(
  identifier: string,
  element: Element,
  from: HTMLElement = document.head,
): HTMLElementTagNameMap[Element] => {
  const existingTag = from.querySelector(`[${identifier}]`);
  if (existingTag) {
    return existingTag as HTMLElementTagNameMap[Element];
  }
  const tag = document.createElement(element);
  const [key, value] = identifier.split('=');
  tag.setAttribute(key, value || 'true');
  from.appendChild(tag);
  return tag;
};

export const provideStyleTag = (name: string) => provideTag(
  `data-theme=${name}`,
  'style',
);

export const provideControlsWrapper = () => provideTag(
  'data-theme-controls',
  'div',
  document.body,
);

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
  return control;
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
  const controlSelector = useMemo(
    () => `${controlDataAttribute}="${control.getAttribute(controlDataAttribute)}"`,
    [name, prefix],
  );
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
        `body:has([${controlSelector}]:checked)`,
      ];
      contentBlocks.push(`${selectors.join(', ')} { ${style} }`);
      styleTag.textContent = contentBlocks.join('\n');
    },
    [name, styleTag, theme.style, styleClass, controlSelector],
  );
  return [styleClass, controlSelector];
};
