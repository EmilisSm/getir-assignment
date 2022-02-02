import { SortingCard, FilterCard, ProductsCard, ShoppingCart } from '../../';

import { AppMainWrapper } from './AppMain.styled';

export const AppMain: React.FC = () => {
  return (
    <AppMainWrapper>
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
    </AppMainWrapper>
  );
};
