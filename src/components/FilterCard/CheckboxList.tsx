import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxWrapperStyled } from './FilterCard.styled';

export const CheckboxList: React.FC<{ options: Array<string> }> = ({
  options,
}) => {
  const [allChecked, setAllChecked] = useState(true);

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAllChecked(event.target.checked);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {options.map((option, index) => (
        <FormControlLabel key={index} label={option} control={<Checkbox />} />
      ))}
    </Box>
  );

  return (
    <CheckboxWrapperStyled>
      <FormControlLabel
        label="All"
        control={<Checkbox checked={allChecked} onChange={handleAllCheck} />}
      />
      {children}
    </CheckboxWrapperStyled>
  );
};
