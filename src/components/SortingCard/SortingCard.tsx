import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useAppDispatch } from '../../store/hooks';
import { setSorting } from '../../store/slices/SortingSlice';
import { CardStyled, CardHeadingSmallStyled } from '../common.styled';
import { FormControlWrapper } from './SortingCart.styled';

export const SortingCard: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <CardHeadingSmallStyled>Sorting</CardHeadingSmallStyled>
      <CardStyled>
        <FormControlWrapper>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => dispatch(setSorting(e.target.value))}
          >
            <FormControlLabel
              value="PriceAsc"
              control={<Radio />}
              label="Price low to high"
            />
            <FormControlLabel
              value="PriceDesc"
              control={<Radio />}
              label="Price high to low"
            />
            <FormControlLabel
              value="DateAsc"
              control={<Radio />}
              label="New to old"
            />
            <FormControlLabel
              value="DateDesc"
              control={<Radio />}
              label="Old to new"
            />
          </RadioGroup>
        </FormControlWrapper>
      </CardStyled>
    </>
  );
};
