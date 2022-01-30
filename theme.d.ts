import '@emotion/react';
import '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      white: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      white: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: {
      primary?: string;
      primaryDark?: string;
      primaryLight?: string;
      white?: string;
    };
  }
}
