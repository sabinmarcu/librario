import '@emotion/react';
import '@emotion/styled';
import type {
  Theme as ThemeType,
} from '@librario/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

declare module '@emotion/styled' {
  export interface Theme extends ThemeType {}
}
