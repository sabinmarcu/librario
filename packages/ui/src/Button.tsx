import {
  forwardRef,
  useMemo,
} from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'default',
  onClick?: () => void,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'default',
    onClick,
    children,
  }, ref) => {
    const color = useMemo(
      () => (variant === 'primary' && 'blue')
        || (variant === 'secondary' && 'red')
        || 'black',
      [variant],
    );
    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        style={{
          background: 'white',
          border: 'solid 2px transparent',
          borderColor: color,
          padding: 10,
          borderRadius: 4,
          color,
        }}
      >
        {children || 'Button'}
      </button>
    );
  },
);
