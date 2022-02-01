import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { theme, muiTheme } from './theme';
import { Header, Footer, AppMain } from './components';

import './styles.css';

export const App = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <AppMain />
          <Footer />
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
