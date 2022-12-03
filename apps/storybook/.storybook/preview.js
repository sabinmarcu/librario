export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'system',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'system', title: 'System Preferred' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  controls: { expanded: true },
};
