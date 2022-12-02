import type {
  Meta,
  Story,
} from '@storybook/react';
import { useProvideTheme } from '../hooks/useProvideTheme';
import { theme as themeSet } from '../theme/index';

export default {
  title: 'Theme/Transitions',
} as Meta;

const theme = themeSet.light;
const { theme: { transition: { create } } } = theme;

const Transition: Story<{ transition: any }> = ({
  transition,
}) => (
  <div>
    <div className="transition" style={{ transition: create(...transition as any) }} />
    {JSON.stringify(transition)}
  </div>
);

export const Showcase: Story = () => {
  const [className] = useProvideTheme(theme, 'light');
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: '2rem',
        flexFlow: 'row wrap',
      }}
    >
      <style>
        {`
        .transition {
          width: 100px;
          height: 100px;
          background: black;
          color: white;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        div:has(> .transition) {
          width: 200px;
          white-space: pre-wrap;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border: solid 1px black;
        }
        .transition:hover {
          background: red;
          transform: scale(1.5);
        }
      `}
      </style>
      <Transition transition={['background']} />
      <Transition transition={[['background', 'complex']]} />
      <Transition transition={['transform']} />
      <Transition transition={[['transform', 'complex', 200, 'easeOut'], ['background', 'complex']]} />
    </div>
  );
};
