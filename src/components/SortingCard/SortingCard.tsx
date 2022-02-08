import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSorting } from '../../store/slices/sortingSlice';
import { CardStyled, CardHeadingSmallStyled } from '../common.styled';
import { FormControlWrapper } from './SortingCart.styled';

export const SortingCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sort.sortType);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSorting(event.target.value));
  };
  return (
    <>
      <CardHeadingSmallStyled>Sorting</CardHeadingSmallStyled>
      <CardStyled>
        <FormControlWrapper>
          <div>
            <input
              type="radio"
              id="priceAsc"
              value="PriceAsc"
              checked={sortType === 'PriceAsc'}
              onChange={handleChange}
            />
            <label htmlFor="priceAsc">Price low to high</label>
          </div>
          <div>
            <input
              type="radio"
              id="priceDesc"
              value="PriceDesc"
              checked={sortType === 'PriceDesc'}
              onChange={handleChange}
            />
            <label htmlFor="priceDesc">Price high to low</label>
          </div>
          <div>
            <input
              type="radio"
              id="dateAsc"
              value="DateAsc"
              checked={sortType === 'DateAsc'}
              onChange={handleChange}
            />
            <label htmlFor="dateAsc">New to old</label>
          </div>
          <div>
            <input
              type="radio"
              id="dateDesc"
              value="DateDesc"
              checked={sortType === 'DateDesc'}
              onChange={handleChange}
            />
            <label htmlFor="dateDesc">Old to new</label>
          </div>
        </FormControlWrapper>
      </CardStyled>
    </>
  );
};
