import {} from '@emotion/styled';
import theme from './theme';

declare module '@emotion/styled' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
