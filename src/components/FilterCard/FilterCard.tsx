import _ from 'lodash';

import { useAppSelector } from '../../store/hooks';
import { CardHeadingSmallStyled } from '../common.styled';
import { SearchInputStyled, FilterCardStyled } from './FilterCard.styled';
import { CheckboxList } from './CheckboxList';

export const FilterCard: React.FC<{ title: string }> = ({ title }) => {
  const products = useAppSelector((state) => state.products.items);
  const tags = products.map((item) => item.tags);
  const brands = products.map((item) => item.manufacturer);
  return (
    <>
      <CardHeadingSmallStyled>{title}</CardHeadingSmallStyled>
      <FilterCardStyled>
        <SearchInputStyled
          type="text"
          placeholder={`Search ${title.toLowerCase()}`}
        />
        <CheckboxList
          options={
            title.toLowerCase() === 'tags' ? _.union(...tags) : _.union(brands)
          }
        />
      </FilterCardStyled>
    </>
  );
};
