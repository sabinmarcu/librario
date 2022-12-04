import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import {

  useCallback,
  useState,
  forwardRef,
  useMemo,
} from 'react';
import type {
  ChangeEventHandler,
  ComponentProps,
  FocusEventHandler,
} from 'react';
import { theme } from '@librario/theme';
import { useReplicateRef } from '@librario/hooks';
import { Flex } from '../Layout/Flex';
import { Surface } from '../Surface/Surface';

export interface InteractionProps {
  hasText: boolean;
  hasFocus: boolean;
}

export const commonStyles = `
  padding: 1rem 1.2rem;
  border-radius: ${theme.shape.borderRadius};
  color: ${theme.colors.text.main};
`;

export const InputWrapper = styled(Surface, {
  shouldForwardProp: (prop) => !['hasText', 'hasFocus'].includes(prop),
})<InteractionProps>(`
  position: relative;
  border: solid 2px currentColor;
  transition: ${theme.transition.create('borderColor', 'boxShadow', 'background')};
  border-radius: ${theme.shape.borderRadius};
  background: transparent;
`, ({ hasFocus }) => hasFocus && `
  box-shadow: ${theme.shadows[5]};
  background: ${theme.colors.background.paper};
  border-color: transparent;
`).withComponent(Flex);

export const InputLabel = styled('label', {
  shouldForwardProp: (prop) => !['hasText', 'hasFocus'].includes(prop),
})<InteractionProps>(`
  ${commonStyles}
  ${theme.mixins.typography.body2}
  position: absolute;
  pointer-events: none;
  inset: 15% auto;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform-origin: top left;
  background: transparent;
  transition: ${theme.transition.create('transform', 'background', 'padding', 'color')};
`,
({ hasText, hasFocus }) => {
  if (!(hasText || hasFocus)) {
    return {};
  }
  return {
    background: hasFocus ? theme.colors.background.paper : theme.colors.background.main,
    transform: 'translate(0.8rem, -1.4rem) scale(0.8)',
    padding: '0.5rem 0.8rem',
    color: theme.colors.text.secondary,
    textDecoration: hasFocus ? 'underline' : 'none',
  };
});

export const InputElement = styled.input`
  ${commonStyles}
  ${theme.mixins.typography.body2}
  outline: none;
  margin: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background: transparent;
  border: none;
`;

export type InputProps = ComponentProps<typeof InputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label, onChange, onBlur, onFocus, ...props
  }, ref) => {
    const id = useMemo(
      () => (label ? `input-${nanoid()}` : undefined),
      [label],
    );
    const ownRef = useReplicateRef(ref);
    const [text, setText] = useState('');
    const [hasFocus, setFocused] = useState(false);
    const handleBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
      (event) => {
        setFocused(false);
        if (onBlur) {
          onBlur?.(event);
        }
      },
      [onBlur],
    );
    const handleFocus = useCallback<FocusEventHandler<HTMLInputElement>>(
      (event) => {
        setFocused(true);
        if (onBlur) {
          onFocus?.(event);
        }
      },
      [onFocus],
    );
    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (event) => {
        const { target: { value } } = event;
        setText(value);
        onChange?.(event);
      },
      [onChange],
    );
    const hasText = useMemo(() => text.length > 0, [text]);
    const interactionProps = useMemo(() => ({ hasText, hasFocus }), [hasText, hasFocus]);
    return (
      <InputWrapper {...interactionProps} grow>
        {label
          ? (
            <InputLabel {...interactionProps}>
              {label}
            </InputLabel>
          )
          : undefined}
        <InputElement
          {...props}
          aria-labelledby={id}
          ref={ownRef}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </InputWrapper>
    );
  },
);
