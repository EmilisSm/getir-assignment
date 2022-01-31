import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSorting } from '../../store/slices/SortingSlice';
import { CardWrapper } from '../common.styled';
import { FormControlWrapper, CardHeadingSmall } from './SortingCart.styled';

export const SortingCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.products.page);
  return (
    <>
      <CardHeadingSmall>Sorting</CardHeadingSmall>
      <CardWrapper>
        <FormControlWrapper>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => dispatch(setSorting(e.target.value))}
          >
            <FormControlLabel
              value="lowToHigh"
              control={<Radio />}
              label="Price low to high"
            />
            <FormControlLabel
              value="highToLow"
              control={<Radio />}
              label="Price high to low"
            />
            <FormControlLabel
              value="newToOld"
              control={<Radio />}
              label="New to old"
            />
            <FormControlLabel
              value="oldToNew"
              control={<Radio />}
              label="Old to new"
            />
          </RadioGroup>
        </FormControlWrapper>
      </CardWrapper>
    </>
  );
};
