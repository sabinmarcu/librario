import type {
  ChangeEventHandler,
  ComponentProps,
} from 'react';
import {
  forwardRef,
  useCallback,
} from 'react';
import {
  Input,
} from '@librario/ui';
import { useAtom } from 'jotai';
import { searchState } from '../state/searchState';

export const Search = forwardRef<HTMLInputElement, ComponentProps<typeof Input>>(
  (props, ref) => {
    const [search, setSearch] = useAtom(searchState);
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      ({ target: { value } }) => {
        setSearch(value);
      },
      [],
    );
    return (
      <Input
        {...props}
        ref={ref}
        value={search}
        onChange={onChange}
        type="search"
      />
    );
  },
);
