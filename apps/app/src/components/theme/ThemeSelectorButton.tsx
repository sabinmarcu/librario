import type { ThemeSelection } from '@librario/theme';
import { useThemeSet } from '@librario/theme/src/hooks/useProvideThemeSet';
import { Button } from '@librario/ui';
import type { FC } from 'react';
import { useCallback } from 'react';

export interface ThemeSelectorProps {
  which: ThemeSelection
}

export const ThemeSelectorButton: FC<ThemeSelectorProps> = ({
  which,
}) => {
  const { selection, setSelection } = useThemeSet();
  const onClick = useCallback(
    () => setSelection(which),
    [setSelection, which],
  );
  return (
    <Button
      onClick={onClick}
      color={which === selection ? 'primary' : 'default'}
      variant="outlined"
    >
      {which}
    </Button>
  );
};
