import { useReplicateRef } from '@librario/hooks';
import type { ComponentType } from 'react';
import {
  Children,
  createElement,
  forwardRef,
} from 'react';
import { useRipple } from '../hooks/useRipple';
import type {
  RippleHookProps,
  RippleProps,
} from '../types';
import { Ripple } from './Ripple';

export const withRipple = <
  K extends {},
  T extends HTMLElement,
>(
  Component: ComponentType<K>,
  propsTransform?: (props: K) => RippleHookProps,
) => {
  const HOC = forwardRef<T, K>(
    (
      props,
      outerRef,
    ) => {
      const ref = useReplicateRef<T>(outerRef);
      const { children } = props;
      const hookProps = propsTransform ? propsTransform(props) : {};
      const ripple = useRipple<T>(ref, hookProps);
      if (!ripple.shouldRender) {
        return createElement(Component, { ...props, ref }, children);
      }
      const { shouldRender, ripples, ...rippleProps } = (ripple || {});
      return createElement(
        Component,
        {
          ...props,
          ref,
        },
        [
          ...Children.toArray(children),
          ...ripples.map(
            ({ point, id }) => createElement(
              Ripple,
              {
                ...{ ...rippleProps, position: point } as RippleProps,
                key: `ripple-${id}`,
              },
            ),
          ),
        ],
      );
    },
  );
  HOC.displayName = `withRipple(${Component.displayName || Component.name})`;
  return HOC;
};
