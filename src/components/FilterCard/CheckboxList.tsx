import { useState } from 'react';
import _ from 'lodash';

import { CheckboxWrapperStyled, CheckboxStyled } from './CheckboxList.styled';

const Checkbox: React.FC<{
  name: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, checked, onChange }) => (
  <CheckboxStyled>
    <input
      type="checkbox"
      id={_.camelCase(name)}
      name={_.camelCase(name)}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={_.camelCase(name)}>{name}</label>
  </CheckboxStyled>
);

export const CheckboxList: React.FC<{ options: Array<string> }> = ({
  options,
}) => {
  const [allChecked, setAllChecked] = useState(true);
  const [selected, setSelected] = useState<Array<string>>([]);

  const handleAllCheck = () => {
    setAllChecked(!allChecked);
  };

  const handleCheckboxCheck = (option: string) => {
    const tempArray: Array<string> = [...selected];
    const isSelected = selected.includes(option);
    if (isSelected) {
      setSelected(tempArray.filter((i) => i !== option));
    } else {
      tempArray.push(option);
      setSelected(tempArray);
    }
  };

  return (
    <CheckboxWrapperStyled>
      <Checkbox name="All" checked={allChecked} onChange={handleAllCheck} />
      {options.map((option) => (
        <Checkbox
          key={_.camelCase(option)}
          name={option}
          checked={selected.includes(option)}
          onChange={() => handleCheckboxCheck(option)}
        />
      ))}
    </CheckboxWrapperStyled>
  );
};
