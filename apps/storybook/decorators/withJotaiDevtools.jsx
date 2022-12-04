import { useAtomsDebugValue } from 'jotai/devtools';

export const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export const withJotaiDevtools = (Story) => (
  <>
    <DebugAtoms />
    <Story />
  </>
);
