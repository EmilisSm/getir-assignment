import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { theme, muiTheme } from './theme';
import {
  Header,
  Footer,
  AppMain,
  SortingCard,
  FilterCard,
  ProductsCard,
  ShoppingCart,
} from './components';

import './styles.css';

export const App = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header>
            <h1>Market</h1>
          </Header>
          <AppMain>
            <div className="wrapper">
              <div className="first-column">
                <SortingCard />
                <FilterCard title="Brands" />
                <FilterCard title="Tags" />
              </div>
              <div className="second-column">
                <ProductsCard />
              </div>
              <div className="third-column">
                <ShoppingCart />
              </div>
            </div>
          </AppMain>
          <Footer>2019 - Privacy Policy</Footer>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
