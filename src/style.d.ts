import {} from '@emotion/styled';
import theme from './theme';

declare module '@emotion/styled' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
