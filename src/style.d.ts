import {} from '@emotion/styled';

declare module '@emotion/styled' {
  type Theme = typeof theme;
  export type DefaultTheme = Theme;
}
