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
