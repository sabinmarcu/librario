import type {
  Story,
  Meta,
} from '@storybook/react';
import { BaseTypography } from './base';
import { H1 } from './h1';
import { H2 } from './h2';
import { H3 } from './h3';
import { H4 } from './h4';
import { H5 } from './h5';
import { H6 } from './h6';
import { P } from './p';

export default {
  title: 'Features/Style Guide/Typography/Raw',
} as Meta;

const toRender = [
  [BaseTypography, 'Base Typography'],
  [H1, 'Heading 1'],
  [H2, 'Heading 2'],
  [H3, 'Heading 3'],
  [H4, 'Heading 4'],
  [H5, 'Heading 5'],
  [H6, 'Heading 6'],
  [P, 'Paragraph'],
];

export const Raw: Story = () => (
  <>
    {toRender.map(([Component, name]) => (
      <Component>{name as any}</Component>
    ))}
  </>
);
