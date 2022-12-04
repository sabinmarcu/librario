import { withJotaiDevtools } from '../decorators/withJotaiDevtools';
import { withTheme } from '../decorators/withTheme';

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'system',
    title: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System Preferred' },
      ],
    },
  },
};

export const parameters = {
  controls: { expanded: true },
};

export const decorators = [
  withTheme,
  withJotaiDevtools,
];
