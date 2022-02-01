import _ from 'lodash';

import { useAppSelector } from '../../store/hooks';
import { CardHeadingSmall } from '../common.styled';
import { SearchInput, FilterCardWrapper } from './FilterCard.styled';
import { CheckboxList } from './CheckboxList';

export const FilterCard: React.FC<{ title: string }> = ({ title }) => {
  const products = useAppSelector((state) => state.products.items);
  const tags = products.map((item) => item.tags);
  const brands = products.map((item) => item.manufacturer);
  return (
    <>
      <CardHeadingSmall>{title}</CardHeadingSmall>
      <FilterCardWrapper>
        <SearchInput
          type="text"
          placeholder={`Search ${title.toLowerCase()}`}
        />
        <CheckboxList
          options={
            title.toLowerCase() === 'tags' ? _.union(...tags) : _.union(brands)
          }
        />
      </FilterCardWrapper>
    </>
  );
};
