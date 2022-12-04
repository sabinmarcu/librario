import {
  Flex,
  Input,
} from '@librario/ui';
import type { WritableAtom } from 'jotai';
import { useAtom } from 'jotai';
import type {
  ChangeEventHandler,
  ComponentProps,
  FC,
} from 'react';
import { useCallback } from 'react';

export type EditInputProps = ComponentProps<typeof Input> & {
  field: WritableAtom<string | number, string, void>
  type?: 'string' | 'number'
  label: string
};

export const EditInput: FC<EditInputProps> = ({
  field,
  type,
  label,
  ...props
}) => {
  const [value, setValue] = useAtom(field);
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value: inputValue } }) => {
      setValue(type === 'number'
        ? parseInt(inputValue, 10)
        : inputValue);
    },
    [type],
  );
  return (
    <Flex>
      <Input
        {...props}
        label={label}
        value={value}
        onChange={onChange}
        type={type === 'number' ? 'number' : 'text'}
      />
    </Flex>
  );
};
