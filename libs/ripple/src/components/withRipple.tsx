import { useReplicateRef } from '@librario/hooks';
import type {
  ComponentType,
  PropsWithChildren,
} from 'react';
import {
  useEffect,

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
  K extends PropsWithChildren<{}>,
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
      const { onClick, ...forwardProps } = props as any;
      useEffect(
        () => {
          if (ref.current && onClick) {
            const element = ref.current;
            element.addEventListener('click', onClick);
            return () => element.removeEventListener('click', onClick);
          }
          return undefined;
        },
        [ref, onClick],
      );
      if (!ripple.shouldRender) {
        return createElement(Component, { ...props, ref }, children);
      }
      const { shouldRender, ripples, ...rippleProps } = (ripple || {});
      return createElement(
        Component,
        {
          ...(onClick ? forwardProps : props),
          ref,
        },
        [
          ...Children.toArray(children),
          ...ripples.map(
            ({ point, id }) => createElement(
              Ripple,
              {
                ...{
                  ...rippleProps,
                  style: {
                    top: point.y - rippleProps.size / 2,
                    left: point.x - rippleProps.size / 2,
                  },
                } as RippleProps,
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
