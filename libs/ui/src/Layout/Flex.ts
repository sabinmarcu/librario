import styled from '@emotion/styled';

export type Alignment = {
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
};
export type Center = {
  center?: true;
};
export type FlexProps = {
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  grow?: boolean;
  shrink?: boolean;
  gap?: number;
} & (Alignment | Center);

export const Flex = styled('div', {
  shouldForwardProp: (prop) => !['direction', 'wrap', 'grow', 'shrink', 'gap', 'center'].includes(prop),
})<FlexProps>(
  `
    display: flex;
  `,
  ({ direction = 'row' }) => `flex-direction: ${direction};`,
  ({ wrap = 'nowrap' }) => `flex-wrap: ${wrap};`,
  ({ grow = false }) => (grow ? 'flex-grow: 1;' : ''),
  ({ shrink = false }) => (shrink ? 'flex-shrink: 1;' : ''),
  ({ gap = 0 }) => `gap: ${gap}rem;`,
  (props) => {
    if ('center' in props) {
      return `
        align-items: center;
        justify-content: center;
      `;
    }
    const { align, justify } = props as Exclude<FlexProps, Center>;
    const styles: string[] = [];
    if (align) {
      styles.push(`align-items: ${align};`);
    }
    if (justify) {
      styles.push(`justify-content: ${justify};`);
    }
    return styles.join('\n');
  },
);
