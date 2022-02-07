import { useAppSelector } from '../../store/hooks';
import { CardHeadingSmallStyled } from '../common.styled';
import { SearchInputStyled, FilterCardStyled } from './FilterCard.styled';
import { CheckboxList } from './CheckboxList';

export const FilterCard: React.FC<{ title: string }> = ({ title }) => {
  const filter = useAppSelector((state) => state.filter);
  const tags = filter.tags;
  const brands = filter.brands;
  return (
    <>
      <CardHeadingSmallStyled>{title}</CardHeadingSmallStyled>
      <FilterCardStyled>
        <SearchInputStyled
          type="text"
          placeholder={`Search ${title.toLowerCase()}`}
        />
        <CheckboxList
          options={title.toLowerCase() === 'tags' ? tags : brands}
        />
      </FilterCardStyled>
    </>
  );
};
