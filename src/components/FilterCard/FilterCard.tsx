import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { CardHeadingSmallStyled } from '../common.styled';
import { SearchInputStyled, FilterCardStyled } from './FilterCard.styled';
import { CheckboxList } from './CheckboxList';
import { debounce } from 'lodash';

export const FilterCard: React.FC<{ title: 'tags' | 'brands' }> = ({
  title,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const filter = useAppSelector((state) => state.filter);
  const tags = filter.tags;
  const brands = filter.brands;

  const debouncedSearch = React.useRef(
    debounce(async (value) => {
      setSearchInput(value);
    }, 300)
  ).current;

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  return (
    <>
      <CardHeadingSmallStyled>{title}</CardHeadingSmallStyled>
      <FilterCardStyled>
        <SearchInputStyled
          type="text"
          placeholder={`Search ${title.toLowerCase()}`}
          onChange={handleSearchInput}
        />
        <CheckboxList
          title={title}
          options={
            title.toLowerCase() === 'tags'
              ? searchInput
                ? tags.filter((tag) =>
                    tag.toLowerCase().includes(searchInput.toLowerCase())
                  )
                : tags
              : searchInput
              ? brands.filter((brand) =>
                  brand.toLowerCase().includes(searchInput.toLowerCase())
                )
              : brands
          }
        />
      </FilterCardStyled>
    </>
  );
};
