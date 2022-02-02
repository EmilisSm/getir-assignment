import { SortingCard, FilterCard, ProductsCard, ShoppingCart } from '../../';

import {
  MainWrapperStyled,
  FirstColumnStyled,
  SecondColumnStyled,
  ThirdColumnStyled,
} from './Main.styled';

export const Main: React.FC = () => {
  return (
    <main>
      <MainWrapperStyled>
        <FirstColumnStyled>
          <SortingCard />
          <FilterCard title="Brands" />
          <FilterCard title="Tags" />
        </FirstColumnStyled>
        <SecondColumnStyled>
          <ProductsCard />
        </SecondColumnStyled>
        <ThirdColumnStyled>
          <ShoppingCart />
        </ThirdColumnStyled>
      </MainWrapperStyled>
    </main>
  );
};
