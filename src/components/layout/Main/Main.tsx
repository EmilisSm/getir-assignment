import { useEffect } from 'react';
import { SortingCard, FilterCard, ProductsCard, ShoppingCart } from '../../';
import { useAppDispatch } from '../../../store/hooks';
import {
  fetchAllProductTags,
  fetchCompanyBrands,
} from '../../../store/slices/filterSlice';

import {
  MainWrapperStyled,
  FirstColumnStyled,
  SecondColumnStyled,
  ThirdColumnStyled,
} from './Main.styled';

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProductTags());
    dispatch(fetchCompanyBrands());
  }, [dispatch]);
  return (
    <main>
      <MainWrapperStyled>
        <FirstColumnStyled>
          <SortingCard />
          <FilterCard title="brands" />
          <FilterCard title="tags" />
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
